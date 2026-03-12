package com.bluecrew.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("API de BlueCrew 🐳")
                        .version("1.0.0")
                        .description("API REST para gestión de datos de BlueCrew")
                        .contact(new Contact()
                                .name("BlueCrew")
                                .email("admin@BlueCrew.com")
                                .url("https://bluecrewreact.netlify.app/"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://www.apache.org/licenses/LICENSE-2.0.html"))
                        .termsOfService("https://www.balmis.com/terminos"));

    }
}