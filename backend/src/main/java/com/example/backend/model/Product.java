package com.example.backend.model;

public record Product(
        String id,
        String name,
        String description,
        String category,
        String unit,
        Double price
) {
}
