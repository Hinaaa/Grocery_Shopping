package com.example.backend.repo;

import com.example.backend.model.Product;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
@Document("Products")
public interface ProductRepo extends MongoRepository<Product, String> {
}
