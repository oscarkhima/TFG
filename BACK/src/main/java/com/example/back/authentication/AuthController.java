package com.example.back.authentication;

import com.example.back.card.CardModel;
import com.example.back.dish.DishModel;
import com.example.back.repositories.UserRepository;
import com.example.back.user.UserController;
import com.example.back.user.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/user/singIn")
    private ResponseEntity<?> singInUser(@RequestBody AuthenticationRequest authenticationRequest){
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        String username = authenticationRequest.getUsername();
        String password = authenticationRequest.getPassword();
        String email = authenticationRequest.getEmail();
        String name = authenticationRequest.getName();
        ArrayList<CardModel> cartas = authenticationRequest.getCartas();
        ArrayList<DishModel> platos = authenticationRequest.getPlatos();
        //COMPROBAMOS QUE NO ESTE VACIO O COINCIDA CON UN USER CREADO
        List<UserModel> lista = userRepository.findAll();
        for (UserModel user:lista){
            if (user.getUsername().equals(username)){
                authenticationResponse.setSucces(false);
                return ResponseEntity.ok(authenticationResponse);
            }
            if (user.getEmail().equals(email)){
                authenticationResponse.setSucces(false);
                return ResponseEntity.ok(authenticationResponse);
            }
        }
            UserModel userModel = new UserModel();
            userModel.setId();
            userModel.setUsername(username);
            userModel.setPassword(password);
            userModel.setName(name);
            userModel.setEmail(email);
            userModel.setCartas(cartas);
            userModel.setPlatos(platos);
        try {
            userRepository.insert(userModel);
        }catch (Exception e) {
            authenticationResponse.setSucces(false);
            return ResponseEntity.ok(authenticationResponse);
        }
        authenticationResponse.setSucces(true);
        return ResponseEntity.ok(authenticationResponse);

    }

    @PostMapping("/user/logIn")
    private ResponseEntity<?> logInUser(@RequestBody AuthenticationRequest authenticationRequest){
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        String email = authenticationRequest.getEmail();
        String password = authenticationRequest.getPassword();
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email,password));
        }catch (Exception e){
            authenticationResponse.setSucces(false);
            return ResponseEntity.ok(authenticationResponse);
        }
        UserModel user = userRepository.findByUsername(email);
        authenticationResponse.setEmail(user.getEmail());
        authenticationResponse.setUserName(user.getUsername());
        authenticationResponse.setSucces(true);
        return ResponseEntity.ok(authenticationResponse);
    }

}
