package com.PostAPIs.PostAPI.s;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostMethods {

    @PostMapping("/add")
    String addition(@RequestParam int a, @RequestParam int b) {
        return "Sum of " + a + " and " + b + " is " + (a + b);
    }

    @PostMapping("/minus")
    String subtraction(@RequestParam int a, @RequestParam int b) {
        return "Subtraction of " + a + " and " + b + " is " + (a - b);
    }

    @PostMapping("/mul")
    String multiplication(@RequestParam int a, @RequestParam int b) {
        return "Multiplication of " + a + " and " + b + " is " + (a * b);
    }

    @PostMapping("/div")
    String division(@RequestParam int a, @RequestParam int b) {
        return "Division of " + a + " and " + b + " is " + (a / b);
    }

    @PostMapping("/rem")
    String remainder(@RequestParam int a, @RequestParam int b) {
        return "Remainder of " + a + " and " + b + " is " + (a % b);
    }

}
