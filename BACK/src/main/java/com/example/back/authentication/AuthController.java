package com.example.back.authentication;

import com.example.back.repositories.UserRepository;
import com.example.back.user.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/user/singIn")
    private ResponseEntity<?> singInUser(@RequestBody AuthenticationRequest authenticationRequest){
        Long id = authenticationRequest.getId();
        String username = authenticationRequest.getUsername();
        String password = authenticationRequest.getPassword();
        String email = authenticationRequest.getEmail();
        String name = authenticationRequest.getName();
        UserModel userModel = new UserModel();
        userModel.setId(id);
        userModel.setUsername(username);
        userModel.setPassword(password);
        userModel.setName(name);
        userModel.setEmail(email);
        try {
            userRepository.save(userModel);
        }catch (Exception e){
            return ResponseEntity.ok(new AuthenticationResponse("Error during sing in " + username));
        }
        return ResponseEntity.ok(new AuthenticationResponse("Succesful sing in " + username));
    }

    @PostMapping("/user/logIn")
    private ResponseEntity<?> logInUser(@RequestBody AuthenticationRequest authenticationRequest){
        String email = authenticationRequest.getEmail();
        String password = authenticationRequest.getPassword();
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email,password));
        }catch (Exception e){
            return ResponseEntity.ok(new AuthenticationResponse("Error log in " + email));
        }
        return ResponseEntity.ok(new AuthenticationResponse("Succesful log in " + email));
    }

}
