package com.example.backend.controller;

import com.example.backend.exception.IdNotFoundException;
import com.example.backend.model.Product;
import com.example.backend.model.ProductDto;
import com.example.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping
    public Product addProduct(@RequestBody ProductDto productDto) {
        return productService.addProduct(productDto);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable String id, @RequestBody ProductDto productDto) throws IdNotFoundException {
        return productService.updateProduct(id,productDto);
    }
    @DeleteMapping("/{id}")
    public boolean deleteProduct(@PathVariable String id) throws IdNotFoundException {
         return productService.deleteProductById(id);
    }

}
