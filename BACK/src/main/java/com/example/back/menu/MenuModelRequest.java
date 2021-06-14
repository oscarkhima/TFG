package com.example.back.menu;

import com.example.back.dish.DishModel;

import java.util.ArrayList;

public class MenuModelRequest {

    private String nombre;

    private ArrayList<String> primeros;

    private ArrayList<String> segundos;

    private ArrayList<String> postres;

    private boolean activated;

    private Double precio;

    public MenuModelRequest() {
    }

    public MenuModelRequest(String nombre, ArrayList<String> primeros, ArrayList<String> segundos, ArrayList<String> postres, boolean activated, Double precio) {
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

    public ArrayList<String> getPrimeros() {
        return primeros;
    }

    public void setPrimeros(ArrayList<String> primeros) {
        this.primeros = primeros;
    }

    public ArrayList<String> getSegundos() {
        return segundos;
    }

    public void setSegundos(ArrayList<String> segundos) {
        this.segundos = segundos;
    }

    public ArrayList<String> getPostres() {
        return postres;
    }

    public void setPostres(ArrayList<String> postres) {
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
