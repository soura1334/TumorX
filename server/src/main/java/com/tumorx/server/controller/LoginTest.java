package com.tumorx.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("")
public class LoginTest {

    @GetMapping("/test")
    public String success(){
        return "Success";
    }

}
