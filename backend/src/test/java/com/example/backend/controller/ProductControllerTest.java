package com.example.backend.controller;

import com.example.backend.model.Product;
import com.example.backend.model.ProductDto;
import com.example.backend.repo.ProductRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class ProductControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ProductRepo mockProductRepo;

    ObjectMapper objectMapper = new ObjectMapper();

    Product apple = new Product("1", "Apple", "Its fruit", "Fruit", "kg", 1.90);
    Product cherry = new Product("2", "Cherry", "Is tasty", "Fruit", "kg", 5.99);
    String jsonAppleArr ="""
                            [{
                                "id": "1",
                                "name": "Apple",
                                "description": "Its fruit",
                                "category": "Fruit",
                                "unit": "kg",
                                "price": 1.90
                            }]
                """;
    String jsonCherry ="""
                            {
                                "id": "2",
                                "name": "Cherry",
                                "description": "Is tasty",
                                "category": "Fruit",
                                "unit": "kg",
                                "price": 5.99
                            }
                """;

    @Test
    void getAllProducts_shouldReturnEmptyList_whenCalled() throws Exception {
        mockMvc.perform(get("/api/products"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }
    @Test
    void getAllProducts_shouldReturnProduct_whenCalled() throws Exception {
        mockProductRepo.save(apple);
        mockMvc.perform(get("/api/products"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(jsonAppleArr));
    }
    @Test
    void getProductById_shouldThrowIdNotFoundException_whenCalledForInvalidId() throws Exception {
        mockMvc.perform(get("/api/products/"+cherry.id()))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andExpect(MockMvcResultMatchers.jsonPath("$.error").value("Error: Product Id "+cherry.id()+" not found"));
    }
    @Test
    void getProductById_shouldReturnProduct_whenCalledValidId() throws Exception {
       mockProductRepo.save(cherry);
       mockMvc.perform(get("/api/products/"+cherry.id()))
               .andExpect(MockMvcResultMatchers.status().isOk())
               .andExpect(MockMvcResultMatchers.content().json(jsonCherry));
    }
    @Test
    void addProduct_shouldReturnProduct_whenCalledWhitValidData() throws Exception {
        ProductDto cherryDto = new ProductDto(cherry.name(), cherry.description(), cherry.category(), cherry.unit(), cherry.price());
        mockMvc.perform(post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(cherryDto))
                        )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNotEmpty())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(cherry.name()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.description").value(cherry.description()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.category").value(cherry.category()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.unit").value(cherry.unit()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.price").value(cherry.price().toString()));
    }
}