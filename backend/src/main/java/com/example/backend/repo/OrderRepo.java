package com.example.backend.repo;

import com.example.backend.model.Order;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
@Document("Orders")
public interface OrderRepo extends MongoRepository<Order, String> {
}
