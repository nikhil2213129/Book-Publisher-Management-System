package com.example.bookpublisher.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all endpoints
                .allowedOrigins("https://3000-nikhil22131-bookpublish-ylhenisdaeo.ws-us116.gitpod.io/") 
                .allowedMethods("GET", "POST", "PUT", "DELETE") 
                .allowedHeaders("*") 
                .allowCredentials(true); 
    }
}
