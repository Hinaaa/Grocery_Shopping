package com.example.backend.repo;

import com.example.backend.model.OrderItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderItemRepro extends MongoRepository<OrderItem,String> {
    List<OrderItem> getOrderItemsByOrderId(String orderId);
}
