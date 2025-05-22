package com.example.backend.model;

public record OrderItemDto(
        String orderId,
        String productId,
        double count) {
}
