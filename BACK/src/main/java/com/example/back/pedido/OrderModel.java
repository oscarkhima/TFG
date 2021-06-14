package com.example.back.pedido;

import com.example.back.dish.DishModel;

import java.util.ArrayList;

public class OrderModel {

    private String username;

    private int tableNumber;

    private ArrayList<String> platos;

    private double totalPrice;

    public OrderModel() {
    }

    public OrderModel(String username, int tableNumber, ArrayList<String> platos, double totalPrice) {
        this.username = username;
        this.tableNumber = tableNumber;
        this.platos = platos;
        this.totalPrice = totalPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public ArrayList<String> getPlatos() {
        return platos;
    }

    public void setPlatos(ArrayList<String> platos) {
        this.platos = platos;
    }
}
