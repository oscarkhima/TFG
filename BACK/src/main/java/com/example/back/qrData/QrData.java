package com.example.back.qrData;

public class QrData {

    private String nombreCarta;
    private String nombreUsuario;
    private String nombreMenu;
    private int numeroMesa;

    public QrData() {
    }

    public QrData(String nombreCarta, String nombreUsuario, String nombreMenu, int numeroMesa) {
        this.nombreCarta = nombreCarta;
        this.nombreUsuario = nombreUsuario;
        this.nombreMenu = nombreMenu;
        this.numeroMesa = numeroMesa;
    }

    public String getNombreCarta() {
        return nombreCarta;
    }

    public void setNombreCarta(String nombreCarta) {
        this.nombreCarta = nombreCarta;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getNombreMenu() {
        return nombreMenu;
    }

    public void setNombreMenu(String nombreMenu) {
        this.nombreMenu = nombreMenu;
    }

    public int getNumeroMesa() {
        return numeroMesa;
    }

    public void setNumeroMesa(int numeroMesa) {
        this.numeroMesa = numeroMesa;
    }
}
