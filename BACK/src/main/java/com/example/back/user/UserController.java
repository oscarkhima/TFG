package com.example.back.user;

import com.example.back.card.CardModel;
import com.example.back.dish.DishModel;
import com.example.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    public UserRepository userRepository;

    @GetMapping("/user/all")
    public List<UserModel> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/user/create")
    public String createUser(@RequestBody UserModel userModel){

        userModel.setId();
        UserModel usuarioInsertado = userRepository.insert(userModel);

        return "User created " + usuarioInsertado.getName();
    }

    @DeleteMapping(path = "/user/{userId}")
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
    @PutMapping(path = "/user/{userId}")
    public String updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String password,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email){

        UserModel userModel = userRepository.findById(userId).orElseThrow(() -> new IllegalStateException(
                "User with id " + userId + " didn't exists"
        ));

        if (username != null && username.length() > 0 && !Objects.equals(userModel.getUsername(), username)){
            userModel.setUsername(username);
        }
        if (password != null && password.length() > 0 && !Objects.equals(userModel.getPassword(), password)){
            userModel.setPassword(password);
        }
        if (name != null && name.length() > 0 && !Objects.equals(userModel.getName(), name)){
            userModel.setName(name);
        }
        if (email != null && email.length() > 0 && !Objects.equals(userModel.getEmail(), email)){
            userModel.setEmail(email);
        }
        userRepository.save(userModel);
        return "User updated";
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////DISHES//////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/dish/{userName}")
    public ArrayList<DishModel> getAllDishes(@PathVariable("userName") String userName){
        ArrayList<DishModel> platos = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        return platos = userModel.getPlatos();
    }


    @PostMapping(path ="/dish/create/{userName}")
    public boolean createDish (@RequestBody DishModel dishModel,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        ArrayList<DishModel> platos = user.getPlatos();
        platos.add(dishModel);
        user.setPlatos(platos);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////CARDS///////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/card/{userName}")
    public ArrayList<CardModel> getAllCards(@PathVariable("userName") String userName){
        ArrayList<CardModel> cartas = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        return cartas = userModel.getCartas();
    }

    @PostMapping(path ="/card/create/{userName}")
    public boolean createCard (@RequestBody CardModel cardModel,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        ArrayList<CardModel> cartas = user.getCartas();
        cartas.add(cardModel);
        user.setCartas(cartas);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

}
