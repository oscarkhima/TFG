package com.example.back.user;

import com.example.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel foundedUser = userRepository.findByUsername(username);
        if(foundedUser == null) return null;
        String uUsername = foundedUser.getUsername();
        String uPassword = foundedUser.getPassword();
        return new User(uUsername,uPassword, new ArrayList<>());
    }
}
