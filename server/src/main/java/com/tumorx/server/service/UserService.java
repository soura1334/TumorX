package com.tumorx.server.service;

import com.tumorx.server.model.AuthRes;
import com.tumorx.server.model.User;
import com.tumorx.server.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private AuthenticationManager authManager;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public AuthRes register(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);
        return new AuthRes(user.getName(), jwtService.generateToken(user.getEmail()) );
    }

    public AuthRes verify(User user) {
        Authentication authentication =
                authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

        if(authentication.isAuthenticated()){

            User myUser = userRepo.findByEmail(user.getEmail());

            return new AuthRes(myUser.getName(), jwtService.generateToken(user.getEmail()) );
        }

        return new AuthRes(null, null);
    }

}
