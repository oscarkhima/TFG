package com.example.back.user;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

//CREAMOS EL SERVICIO QUE SE ENCARGA DE TRATAR LOS DATOS
//SE ESCRIBE LA ANOTACION @SERVICE PARA QUE PUEDA SER AUTOINJECTADO EN
//EL USERCONTROLLER GRACIAS A @AUROWIRED
@Service
public class UserService {
    public List<User> getUsers(){
        return List.of(new User(
                1L,
                "Alvaro",
                "alvaro@gmail.com",
                LocalDate.of(2000, Month.OCTOBER, 17),
                21));
    }
}
