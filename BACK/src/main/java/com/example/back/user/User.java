package com.example.back.user;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;

@Document(collection = "users")
public class User {

    @Id
    private Long id;

    private String name;

    private String email;

    private LocalDate birth;

    @Transient
    private Integer age;

    public User() {
    }

    public User(Long id, String name, String email, LocalDate birth) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birth = birth;

    }

    public User(String name, String email, LocalDate birth) {
        this.name = name;
        this.email = email;
        this.birth = birth;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", birth=" + birth +
                ", age=" + age +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirth() {
        return birth;
    }

    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }

    public Integer getAge() {
        return Period.between(birth,LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
