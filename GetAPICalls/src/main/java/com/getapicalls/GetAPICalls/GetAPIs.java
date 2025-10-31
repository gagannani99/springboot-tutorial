package com.getapicalls.GetAPICalls;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetAPIs {
        @GetMapping("/name")
        String name(){
            return "Gagan Sai Alasapuri";
        }
        @GetMapping("/greeting")
        String greet(){
            return "Hello Bro";
        }


}
