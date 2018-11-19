package com.Kasseta.service;

import java.util.HashMap;
import java.util.Map;
import com.Kasseta.entity.Info;
import com.Kasseta.util.SQLConn;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author lexa
 */
public class SelectInfo {
    public String getDataForCB(String startDate, String endDate, String atm) {
        String jsonResult = null;
        String queryParam=" DECLARE @atm varchar(8) =  ";
        String queryParams = "SELECT l.cassette_id, r.requested_state, r.sender_ldap, r.information\n" +
"FROM [Kassa2].[dbo].[CassetteOperationHistory] l\n" +
"JOIN [Kassa2].[dbo].[CassetteOperationHistory] r ON l.cassette_id = r.cassette_id\n" +
"WHERE l.[atm]=@atm and l.[ins_date] BETWEEN @StartDate AND DATEADD(DAY,1,@StartDate) AND l.requested_state = 9 and r.ins_date BETWEEN @StartDate AND @EndDate\n" +
"order by requested_state ";
       

        
        
        DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(startDate, formatter1);
        LocalDateTime dateTime1 = LocalDateTime.parse(endDate, formatter2);
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter dateFormatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String time1 = dateTime.format(dateFormatter) + " 00:00:01";
        String time2 = dateTime.format(dateFormatter) + " 23:59:59";
        String start =  dateFormatter + " " + time1;
        String end =  dateFormatter1 + " " + time2;
              
        
        String query =  queryParam + atm + "@StartDate datetime = " + start + "@EndDate datetime = " + end + queryParams ;
        
        
        
        
        try {
             ObjectMapper mapper = new ObjectMapper();
            List<Info> listInfo = new ArrayList<>();
            try (Connection conn = SQLConn.getSqlConnection()) {
                           
                PreparedStatement sqlStatement = conn.prepareStatement(query);
                    sqlStatement.setString(1, atm);
               
                    try (ResultSet resultSet =  sqlStatement.executeQuery()) {
                    while (resultSet.next())  {
                        Info info = new Info();
                        info.setCassette_id(resultSet.getString(1));
                        info.setRequested_state(resultSet.getString(2));
                        info.setSender_ldap(resultSet.getString(3));
                        info.setInformation(resultSet.getString(4));
                        listInfo.add(info);
                    }
                }
                finally {conn.close();
                    }
              
                        
            } catch (SQLException ex) {
                Logger.getLogger(SelectInfo.class.getName()).log(Level.SEVERE, null, ex);
            }            
            jsonResult = mapper.writeValueAsString(listInfo);
          
            
        } catch (JsonProcessingException ex) {
            Logger.getLogger(SelectInfo.class.getName()).log(Level.SEVERE, null, ex);
            
        }
        return jsonResult;
               
    }
}
