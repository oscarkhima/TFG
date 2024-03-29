package com.example.back.user;

import com.example.back.card.CardModel;
import com.example.back.card.CardModelRequest;
import com.example.back.dish.DishModel;
import com.example.back.menu.MenuModel;
import com.example.back.menu.MenuModelRequest;
import com.example.back.pedido.OrderModel;
import com.example.back.qrData.QrData;
import com.example.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
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

    @GetMapping("/dishNames/{userName}")
    public ArrayList<String> getAllDishesNames(@PathVariable("userName") String userName){
        ArrayList<DishModel> platos;
        ArrayList<String> listaNombres = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        platos = userModel.getPlatos();
        for (DishModel plato :platos) {
            listaNombres.add(plato.getNombre());
        }
        return listaNombres;
    }

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
        for (DishModel plato: platos){
            if (plato.getNombre().equals(dishModel.getNombre())){
                return false;
            }
        }
        platos.add(dishModel);
        user.setPlatos(platos);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @DeleteMapping(path ="/dish/delete/{userName}/{dishName}")
    public boolean deleteDish (@PathVariable("dishName") String dishName,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        //ELIMINAR DE LOS PLATOS
        ArrayList<DishModel> platosUser = user.getPlatos();
        for(DishModel plato : platosUser){
            if (plato.getNombre().equals(dishName)){
                platosUser.remove(platosUser.indexOf(plato));
                break;
            }
        }
        //ELIMINAR DE LOS MENUS
        ArrayList<MenuModel> menus = user.getMenus();
        for (MenuModel menu : menus){
            //PRIMEROS
            for (DishModel primero : menu.getPrimeros()){
                if (primero.getNombre().equals(dishName)){
                    ArrayList<DishModel> primeros = menu.getPrimeros();
                    primeros.remove(menu.getPrimeros().indexOf(primero));
                    menu.setPrimeros(primeros);
                    break;
                }
            }
            //SEGUNDOS
            for (DishModel segundo : menu.getSegundos()){
                if (segundo.getNombre().equals(dishName)){
                    ArrayList<DishModel> segundos = menu.getSegundos();
                    segundos.remove(menu.getSegundos().indexOf(segundo));
                    menu.setSegundos(segundos);
                    break;
                }
            }
            //TERCEROS
            for (DishModel postre : menu.getPostres()){
                if (postre.getNombre().equals(dishName)){
                    ArrayList<DishModel> postres = menu.getPostres();
                    postres.remove(menu.getPostres().indexOf(postre));
                    menu.setPostres(postres);
                    break;
                }
            }
        }
        //ELIMINAR DE LAS CARTAS
        ArrayList<CardModel> cartasUser = user.getCartas();
        for(CardModel carta : cartasUser){
            for(DishModel plato : carta.getPlatos()){
                if (plato.getNombre().equals(dishName)){
                    ArrayList<DishModel> platos = carta.getPlatos();
                    platos.remove(carta.getPlatos().indexOf(plato));
                    carta.setPlatos(platos);
                    break;
                }
            }
        }
        user.setPlatos(platosUser);
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

    @PostMapping(path ="/card/update/{userName}")
    public boolean updateCard (@RequestBody CardModel cardModel, @PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        ArrayList<CardModel> cartas = user.getCartas();
        for (int i = 0;i<cartas.size();i++) {
            if (cartas.get(i).getNombre().equals(cardModel.getNombre())){
                cartas.set(i,cardModel);
            }else{
                cartas.get(i).setActivated(false);
            }
        }
        user.setCartas(cartas);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @GetMapping("/card/{userName}")
    public ArrayList<CardModel> getAllCards(@PathVariable("userName") String userName){
        ArrayList<CardModel> cartas = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        return cartas = userModel.getCartas();
    }

    @PostMapping(path ="/card/create/{userName}")
    public boolean createCard (@RequestBody CardModelRequest cardModelRequest, @PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        CardModel cart = new CardModel();
        ArrayList<CardModel> cartas = user.getCartas();
        ArrayList<DishModel> platos = new ArrayList<>();
        cart.setActivated(cardModelRequest.isActivated());
        cart.setNombre(cardModelRequest.getNombre());
        for (CardModel cardModel:
                cartas) {
            if (cardModelRequest.getNombre().equals(cardModel.getNombre())){
                return false;
            }
        }
        for(String nombrePlatos: cardModelRequest.getPlatos()){
            for (DishModel plato: user.getPlatos()){
                if (plato.getNombre().equals(nombrePlatos)){
                    platos.add(plato);
                }
            }
        }
        cart.setPlatos(platos);
        cartas.add(cart);
        user.setCartas(cartas);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @GetMapping("/card/{userName}/{cardName}")
    public CardModel getCard(@PathVariable("userName") String userName,@PathVariable("cardName") String cardName){
        ArrayList<CardModel> cartas = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        cartas = userModel.getCartas();
        for(CardModel carta : cartas){
            if (carta.getNombre().equals(cardName)){
                return carta;
            }
        }
        return null;
    }

    @DeleteMapping(path ="/card/delete/{userName}/{cardName}")
    public boolean deleteCard (@PathVariable("cardName") String cardName,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        //ELIMINAR DE LAS CARTAS
        ArrayList<CardModel> cartasUser = user.getCartas();
        for(CardModel carta : cartasUser){
            if (carta.getNombre().equals(cardName)){
                cartasUser.remove(cartasUser.indexOf(carta));
                user.setCartas(cartasUser);
                break;
            }
        }
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @DeleteMapping(path ="/card/delete/{userName}/{cardName}/{dishName}")
    public boolean deleteDishFromCard (@PathVariable("dishName") String dishName,@PathVariable("cardName") String cardName,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        //ELIMINAR DE LAS CARTAS
        ArrayList<CardModel> cartasUser = user.getCartas();
        for(CardModel carta : cartasUser){
            if (carta.getNombre().equals(cardName)){
                for(DishModel plato : carta.getPlatos()){
                    if (plato.getNombre().equals(dishName)){
                        ArrayList<DishModel> platos = carta.getPlatos();
                        platos.remove(carta.getPlatos().indexOf(plato));
                        carta.setPlatos(platos);
                        break;
                    }
                }
            }
        }
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////MENUS///////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/menu/{userName}")
    public ArrayList<MenuModel> getAllMenus(@PathVariable("userName") String userName){
        ArrayList<MenuModel> cartas = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        return cartas = userModel.getMenus();
    }

    @PostMapping(path ="/menu/update/{userName}")
    public boolean updateMenu (@RequestBody MenuModel menuModel, @PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        ArrayList<MenuModel> menus = user.getMenus();
        for (int i = 0;i<menus.size();i++) {
            if (menus.get(i).getNombre().equals(menuModel.getNombre())){
                menus.set(i,menuModel);
            }else{
                menus.get(i).setActivated(false);
            }
        }
        user.setMenus(menus);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @PostMapping(path ="/menu/create/{userName}")
    public boolean createMenu (@RequestBody MenuModelRequest menuModelRequest, @PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        MenuModel menu = new MenuModel();
        ArrayList<MenuModel> menus = user.getMenus();
        ArrayList<DishModel> primeros = new ArrayList<>();
        ArrayList<DishModel> segundos = new ArrayList<>();
        ArrayList<DishModel> postres = new ArrayList<>();
        Double precio = 0.0;
        menu.setActivated(menuModelRequest.isActivated());
        menu.setNombre(menuModelRequest.getNombre());
        for (MenuModel menuModel:
             menus) {
            if (menuModelRequest.getNombre().equals(menuModel.getNombre())){
                return false;
            }
        }
        for(String nombrePlatos: menuModelRequest.getPrimeros()){
            for (DishModel plato: user.getPlatos()){
                if (plato.getNombre().equals(nombrePlatos)){
                    primeros.add(plato);
                }
            }
        }
        for(String nombrePlatos: menuModelRequest.getSegundos()){
            for (DishModel plato: user.getPlatos()){
                if (plato.getNombre().equals(nombrePlatos)){
                    segundos.add(plato);
                }
            }
        }
        for(String nombrePlatos: menuModelRequest.getPostres()){
            for (DishModel plato: user.getPlatos()){
                if (plato.getNombre().equals(nombrePlatos)){
                    postres.add(plato);
                }
            }
        }
        menu.setPrimeros(primeros);
        menu.setSegundos(segundos);
        menu.setPostres(postres);
        menu.setPrecio(menuModelRequest.getPrecio());
        menus.add(menu);
        user.setMenus(menus);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @GetMapping("/menu/{userName}/{menuName}")
    public MenuModel getMenu(@PathVariable("userName") String userName,@PathVariable("menuName") String menuName){
        ArrayList<MenuModel> menus = new ArrayList<>();
        UserModel userModel = userRepository.findByUsername(userName);
        menus = userModel.getMenus();
        for(MenuModel menu : menus){
            if (menu.getNombre().equals(menuName)){
                return menu;
            }
        }
        return null;
    }

    @DeleteMapping(path ="/menu/delete/{userName}/{menuname}")
    public boolean deleteMenu (@PathVariable("menuname") String menuName,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        //ELIMINAR DE LAS CARTAS
        ArrayList<MenuModel> userMenus = user.getMenus();
        for(MenuModel menu : userMenus){
            if (menu.getNombre().equals(menuName)){
                userMenus.remove(userMenus.indexOf(menu));
                user.setMenus(userMenus);
                break;
            }
        }
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////PEDIDOS/////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping(path ="/order/create/{userName}")
    public boolean createPedido (@RequestBody OrderModel order,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        ArrayList<OrderModel> pedidosUser = user.getPedidos();
        pedidosUser.add(order);
        user.setPedidos(pedidosUser);
        try {
            //
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @GetMapping("/order/{userName}")
    public ArrayList<OrderModel> getAllOrders(@PathVariable("userName") String userName){
        ArrayList<OrderModel> pedidos = new ArrayList<OrderModel>();
        UserModel userModel = userRepository.findByUsername(userName);
        return pedidos = userModel.getPedidos();
    }

    @DeleteMapping(path ="/order/delete/{userName}/{index}")
    public boolean deleteOrder (@PathVariable("index") int index,@PathVariable("userName") String userName){
        UserModel user = userRepository.findByUsername(userName);
        ArrayList<OrderModel> pedidosUser = user.getPedidos();
        pedidosUser.remove(index);
        user.setPedidos(pedidosUser);
        try {
            userRepository.save(user);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////CODIGOS/////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/getQr/{userName}")
    public QrData getQrData(@PathVariable("userName") String userName){
        QrData qrData = new QrData();
        UserModel userModel = userRepository.findByUsername(userName);
        ArrayList<CardModel> cartas = userModel.getCartas();
        ArrayList<MenuModel> menus = userModel.getMenus();
        for (CardModel carta:
             cartas) {
            if (carta.isActivated()){
                qrData.setNombreCarta(carta.getNombre());
            }
        }
        if(qrData.getNombreCarta().isBlank() || qrData.getNombreCarta() == null){
            qrData.setNombreCarta(" ");
        }
        for (MenuModel menuModel:
                menus) {
            if (menuModel.isActivated()){
                qrData.setNombreMenu(menuModel.getNombre());
            }
        }
        if(qrData.getNombreMenu().isBlank() || qrData.getNombreCarta() == null){
            qrData.setNombreMenu(" ");
        }
        qrData.setNombreUsuario(userName);
        return qrData;
    }

}
