package com.example.backend.request;

import com.example.backend.model.OrderItemDto;

import java.util.List;

public record OrderRequest(
        String orderId,
        List<OrderItemDto> orderItemList,
        double totalPrice,
        String userId
) {
}
