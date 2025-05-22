package com.example.backend.response;

import com.example.backend.model.OrderItem;

import java.util.List;

public record OrderResponse(
        String orderId,
        List<OrderItem> orderItems,
        double total
) {
}
