package com.tumorx.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/signin")
@CrossOrigin(origins = "http://localhost:5173")
public class SignInController {

    @GetMapping
    public ResponseEntity<?> checkAuth(){
        return ResponseEntity.ok(true);
    }
}
