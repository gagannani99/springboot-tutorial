package com.autowiring.autowiring;

import org.springframework.stereotype.Component;

@Component
public class Laptop implements Computer {
    public void compile(){
        System.out.println("Returning 404 compile time error");
    }
}
