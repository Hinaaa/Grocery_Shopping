package com.example.backend.service;

import com.example.backend.exception.IdNotFoundException;
import com.example.backend.model.Product;
import com.example.backend.model.ProductDto;
import com.example.backend.repo.ProductRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepo productRepo;
    private final ServiceId  serviceId;

    public ProductService(ProductRepo productRepo, ServiceId serviceId) {

        this.productRepo = productRepo;
        this.serviceId = serviceId;
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product getProductById(String id) throws IdNotFoundException {
        return productRepo.findById(id).orElseThrow(()-> new IdNotFoundException(id));
    }

    public Product addProduct(ProductDto productDto) {
        Product newProduct = new Product(
                serviceId.generateId(),
                productDto.name(),
                productDto.description(),
                productDto.category(),
                productDto.unit(),
                productDto.price()
        );
       productRepo.save(newProduct);
       return newProduct;
    }
}
