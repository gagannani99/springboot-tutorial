package com.autowiring.autowiring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Dev {
    @Autowired
    @Qualifier("laptop")
    Computer comp;
    public void  build(){
        comp.compile();
        System.out.println("Working in awesome project");
    }
}
