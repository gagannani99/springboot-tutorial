package com.PostAPIs.PostAPI.s;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JsonFormatNamePrinting {
    @PostMapping("/name")
    String naming(@RequestBody GettingAndSettingNameForJSON req){
        return "Your name is "+req.getName();
    }
}
