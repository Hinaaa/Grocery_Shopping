package com.example.backend.service;

import com.example.backend.enums.OrderStatus;
import com.example.backend.model.Order;
import com.example.backend.model.OrderItem;
import com.example.backend.model.OrderItemDto;
import com.example.backend.repo.OrderItemRepro;
import com.example.backend.repo.OrderRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.time.Instant;

import static org.junit.jupiter.api.Assertions.*;

class OrderServiceTest {

    OrderRepo orderRepo;
    OrderItemRepro orderItemRepro;

    ServiceId  serviceId;
    OrderService orderService;
    OrderItemService orderItemService;

    Order expectedOrder;
    Order actualOrder;

    OrderItem expectedOrderItem;
    OrderItemDto orderItemDto;
    OrderItem actualOrderItem;

    Instant instant;

    @BeforeEach
    void setUp(){
        orderRepo = Mockito.mock(OrderRepo.class);
        orderItemRepro = Mockito.mock(OrderItemRepro.class);

        orderService = Mockito.mock(OrderService.class);
        orderItemService = Mockito.mock(OrderItemService.class);
        serviceId = Mockito.mock(ServiceId.class);
        instant = Instant.now();
        expectedOrder = new Order("orderId", instant, 1011, OrderStatus.ORDERED);
    }

    @Test
    void getOrders_shouldReturnEmptyList() {

    }
    @Test
    void getOrders_shouldReturnAllOrders() {
    }

    @Test
    void getOrderItemsOfOrderId() {
    }

    @Test
    void addOrder() {
    }
}