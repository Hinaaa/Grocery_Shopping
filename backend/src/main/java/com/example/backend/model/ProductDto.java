package com.example.backend.model;

public record ProductDto(
        String name,
        String description,
        String category,
        String unit,
        Double price) {
}
