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
import java.util.concurrent.atomic.AtomicInteger;

@Document(collection = "users")
public class UserModel {

    private int id;
    private static AtomicInteger ID_GENERATOR = new AtomicInteger(0);

    private String username;

    private String password;

    private String name;

    private String email;

    private ArrayList<CardModel> cartas;

    private ArrayList<DishModel> platos;


    public UserModel() {
        this.id = ID_GENERATOR.getAndIncrement();
    }

    public UserModel(Long id, String username, String password, String name, String email, ArrayList<CardModel> cartas, ArrayList<DishModel> platos) {
        this.id = ID_GENERATOR.getAndIncrement();
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

    public int getId() {
        return id;
    }

    public void setId() {
        this.id = ID_GENERATOR.getAndIncrement();
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
