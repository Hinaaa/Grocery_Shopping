package com.example.backend.controller;

import com.example.backend.exception.IdNotFoundException;
import com.example.backend.model.Product;
import com.example.backend.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService){
        this.productService= productService;

    }

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();

    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable String id) throws IdNotFoundException {
        return productService.getProductById(id);

    }





}
