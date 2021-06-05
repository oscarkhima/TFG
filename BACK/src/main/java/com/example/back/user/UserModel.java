package com.example.back.user;


//import jdk.jfr.StackTrace;
import com.example.back.card.CardModel;
import com.example.back.dish.DishModel;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;

@Document(collection = "users")
public class UserModel {

    @Id
    @Transient
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String name;

    private String email;

    private ArrayList<CardModel> cartas;

    private ArrayList<DishModel> platos;


    public UserModel() {
    }

    public UserModel(Long id, String username, String password, String name, String email, ArrayList<CardModel> cartas, ArrayList<DishModel> platos) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
