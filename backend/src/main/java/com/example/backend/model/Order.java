package com.example.backend.model;

import com.example.backend.enums.OrderStatus;

import java.time.Instant;

public record Order(
        String id,
        Instant date,
        double total,
        OrderStatus status
        ) {}
