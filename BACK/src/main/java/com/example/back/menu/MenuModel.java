package com.example.back.menu;

import com.example.back.dish.DishModel;

import java.util.ArrayList;

public class MenuModel {

    private String nombre;

    private ArrayList<DishModel> primeros;

    private ArrayList<DishModel> segundos;

    private ArrayList<DishModel> postres;

    private boolean activated;

    private Double precio;

    public MenuModel() {
    }

    public MenuModel(String nombre, ArrayList<DishModel> primeros, ArrayList<DishModel> segundos, ArrayList<DishModel> postres, boolean activated, Double precio) {
        this.nombre = nombre;
        this.primeros = primeros;
        this.segundos = segundos;
        this.postres = postres;
        this.activated = activated;
        this.precio = precio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<DishModel> getPrimeros() {
        return primeros;
    }

    public void setPrimeros(ArrayList<DishModel> primeros) {
        this.primeros = primeros;
    }

    public ArrayList<DishModel> getSegundos() {
        return segundos;
    }

    public void setSegundos(ArrayList<DishModel> segundos) {
        this.segundos = segundos;
    }

    public ArrayList<DishModel> getPostres() {
        return postres;
    }

    public void setPostres(ArrayList<DishModel> postres) {
        this.postres = postres;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
