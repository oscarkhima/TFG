package com.example.back.card;

import com.example.back.dish.DishModel;

import java.util.ArrayList;

public class CardModelRequest {

    private String nombre;

    private ArrayList<String> platos;

    private boolean menu;

    private boolean activated;

    private Double precio;

    public CardModelRequest(){

    }

    public CardModelRequest(String nombre, ArrayList<String> platos, boolean menu, boolean activated, Double precio) {
        this.nombre = nombre;
        this.platos = platos;
        this.menu = menu;
        this.activated = false;
        this.precio = precio;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public boolean isMenu() {
        return menu;
    }

    public void setMenu(boolean menu) {
        this.menu = menu;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<String> getPlatos() {
        return platos;
    }

    public void setPlatos(ArrayList<String> platos) {
        this.platos = platos;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}


