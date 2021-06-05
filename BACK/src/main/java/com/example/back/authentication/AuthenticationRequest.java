package com.example.back.authentication;

import com.example.back.card.CardModel;
import com.example.back.dish.DishModel;

import java.time.LocalDate;
import java.util.ArrayList;

public class AuthenticationRequest {

    private Long id;
    private String username;
    private String password;
    private String email;
    private String name;
    private ArrayList<CardModel> cartas;
    private ArrayList<DishModel> platos;

    public AuthenticationRequest(){

    }

    public ArrayList<CardModel> getCartas() {
        return cartas;
    }

    public void setCartas(ArrayList<CardModel> cartas) {
        this.cartas = cartas;
    }

    public ArrayList<DishModel> getPlatos() {
        return platos;
    }

    public void setPlatos(ArrayList<DishModel> platos) {
        this.platos = platos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
