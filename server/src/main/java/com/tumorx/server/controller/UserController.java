package com.tumorx.server.controller;

import com.tumorx.server.model.User;
import com.tumorx.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user){
        return userService.verify(user);
    }

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.register(user);
    }
}
