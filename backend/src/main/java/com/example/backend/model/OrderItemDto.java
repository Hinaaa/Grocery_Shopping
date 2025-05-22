package com.example.backend.model;

public record OrderItemDto(
        String productId,
        double count) {
}
