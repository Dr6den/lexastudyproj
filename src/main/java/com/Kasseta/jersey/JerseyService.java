package com.Kasseta.jersey;


import com.Kasseta.service.SelectInfo;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import javax.ws.rs.core.MediaType;

@Path("/Cassette")
public class JerseyService
{
  
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    
    public String id(@QueryParam("startDate") String startDate, @QueryParam("endDate") String endDate, @QueryParam("atm") String atm) {
       
       
                
        SelectInfo Id= new SelectInfo();
        return "hi there";
    }
}
