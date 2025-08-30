package com.tumorx.server.controller;

import com.tumorx.server.model.AuthRes;
import com.tumorx.server.model.User;
import com.tumorx.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController("")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public AuthRes login(@RequestBody User user){
        return userService.verify(user);
    }

    @PostMapping("/register")
    public AuthRes register(@RequestBody User user){
        return userService.register(user);
    }
}
