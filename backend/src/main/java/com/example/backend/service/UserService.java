package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    public String registerUser(User user) {
        Optional<User> userOptional = userRepo.findByEmail(user.email());
        if(userOptional.isPresent()) {
            return "User already exists";
        }
        userRepo.save(user);
        return "User registered successfully";
    }
    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepo.findByEmail(email);
        if (user.isPresent() && user.get().password().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
}
