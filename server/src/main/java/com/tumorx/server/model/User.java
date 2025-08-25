package com.tumorx.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tumorx")
public class User {

    @Id
    String id;
    String username;
    String password;
}
