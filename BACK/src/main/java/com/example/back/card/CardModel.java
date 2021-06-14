package com.example.back.card;

import com.example.back.dish.DishModel;

import java.util.ArrayList;

public class CardModel {

    private String nombre;

    private ArrayList<DishModel> platos;

    private boolean activated;


    public CardModel(){

    }

    public CardModel(String nombre, ArrayList<DishModel> platos, boolean menu, boolean activated, Double precio) {
        this.nombre = nombre;
        this.platos = platos;
        this.activated = false;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
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

}
