package com.example.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("OrderItems")
public record OrderItem(
    String id,
    String orderId,
    String productId,
    double count
) {
}
