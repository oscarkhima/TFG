package com.example.back.authentication;

public class AuthenticationResponse {

    private String email;
    private String userName;
    private boolean succes;

    public AuthenticationResponse() {

    }

    public AuthenticationResponse(String email, String userName, boolean succes) {
        this.email = email;
        this.userName = userName;
        this.succes = succes;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isSucces() {
        return succes;
    }

    public void setSucces(boolean succes) {
        this.succes = succes;
    }
}
