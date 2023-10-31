package com.whitemind.cogit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class CogitApplication {

    public static void main(String[] args) {
        SpringApplication.run(CogitApplication.class, args);
    }

}
