package com.example.back.card;

import com.example.back.dish.DishModel;

import java.util.ArrayList;

public class CardModel {

    private String nombre;

    private ArrayList<DishModel> platos;

    private boolean menu;

    private Double precio;

    public CardModel(){

    }

    public CardModel(String nombre, ArrayList<DishModel> platos, boolean menu, Double precio) {
        this.nombre = nombre;
        this.platos = platos;
        this.menu = menu;
        this.precio = precio;
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

    public ArrayList<DishModel> getPlatos() {
        return platos;
    }

    public void setPlatos(ArrayList<DishModel> platos) {
        this.platos = platos;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
