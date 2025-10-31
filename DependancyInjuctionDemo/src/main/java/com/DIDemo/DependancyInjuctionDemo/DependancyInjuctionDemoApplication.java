package com.DIDemo.DependancyInjuctionDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DependancyInjuctionDemoApplication {

	public static void main(String[] args) {

        ApplicationContext context=SpringApplication.run(DependancyInjuctionDemoApplication.class, args);
        Dev obj=context.getBean(Dev.class);
        obj.greeting();
	}

}
