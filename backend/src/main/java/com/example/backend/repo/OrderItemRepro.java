package com.example.backend.repo;

import com.example.backend.model.OrderItem;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Document("OrderItems")
public interface OrderItemRepro extends MongoRepository<OrderItem,String> {
    Optional<List<OrderItem>> getOrderItemsByOrderId(String orderId);
}
