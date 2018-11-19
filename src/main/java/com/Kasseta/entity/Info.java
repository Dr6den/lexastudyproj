package com.Kasseta.entity;


public class Info {
    private String  cassette_id;
    private String  requested_state;
    private String  sender_ldap;
    private String  information;
  
    
    public Info(String  cassette_id, String  requested_state, String sender_ldap, String  information) {
        this.cassette_id = cassette_id;
         this.requested_state = requested_state;
        this.sender_ldap = sender_ldap;
         this.information = information;
    }

    public Info() {}

    public String getCassette_id() {
        return cassette_id;
    }
 public void setCassette_id(String cassette_id) {
        this.cassette_id = cassette_id;
    }
    
   public String getRequested_state() {
        return requested_state;
    }

    public void setRequested_state(String requested_state) {
        this.requested_state = requested_state;
    }
    
    
   

    public String getSender_ldap() {
        return sender_ldap;
    }

    public void setSender_ldap(String sender_ldap) {
        this.sender_ldap = sender_ldap;
    }
    
    
    
      public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    


}