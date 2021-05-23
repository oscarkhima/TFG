package com.example.back.user;

import com.example.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class UserController {

    @Autowired
    public UserRepository userRepository;

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/create")
    public String createUser(@RequestBody User user){

        User usuarioInsertado = userRepository.insert(user);

        return "User created " + usuarioInsertado.getName();
    }

    @DeleteMapping(path = "{userId}")
    public String deleteUser(@PathVariable("userId") Long userId){
        boolean existe = userRepository.existsById(userId);
        if (existe){
            userRepository.deleteById(userId);
        }else{
            return "User didn't exists";
        }
        return "User deleted";
    }

    @Transactional
    @PutMapping(path = "{userId}")
    public String updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email){

        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalStateException(
                "User with id " + userId + " didn't exists"
        ));

        if (name != null && name.length() > 0 && !Objects.equals(user.getName(), name)){
            user.setName(name);
        }
        if (email != null && email.length() > 0 && !Objects.equals(user.getEmail(), email)){
            user.setEmail(email);
        }
        userRepository.save(user);
        return "User updated";
    }




}
