package com.example.back.authentication;

import com.example.back.card.CardModel;
import com.example.back.dish.DishModel;
import com.example.back.menu.MenuModel;
import com.example.back.pedido.OrderModel;

import java.util.ArrayList;

public class AuthenticationRequest {

    private int id;
    private String username;
    private String password;
    private String email;
    private String name;
    private ArrayList<CardModel> cartas;
    private ArrayList<MenuModel> menus;
    private ArrayList<DishModel> platos;
    private ArrayList<OrderModel> pedidos;

    public AuthenticationRequest(){

    }

    public ArrayList<OrderModel> getPedidos() {
        return pedidos;
    }

    public void setPedidos(ArrayList<OrderModel> pedidos) {
        this.pedidos = pedidos;
    }

    public ArrayList<MenuModel> getMenus() {
        return menus;
    }

    public void setMenus(ArrayList<MenuModel> menus) {
        this.menus = menus;
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

    public void setId(int id) {
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
