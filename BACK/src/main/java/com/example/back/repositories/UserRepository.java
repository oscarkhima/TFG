package com.example.back.repositories;

import com.example.back.user.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, Long> {
    UserModel findByUsername(String username);
}
