package com.example.backend.controller;

import com.example.backend.enums.OrderStatus;
import com.example.backend.exception.IdNotFoundException;
import com.example.backend.exception.NoOrderItemInOrderException;
import com.example.backend.model.Order;
import com.example.backend.model.OrderItem;
import com.example.backend.request.OrderRequest;
import com.example.backend.service.OrderItemService;
import com.example.backend.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/order")
public class OrderController {

    public final OrderItemService orderItemService;
    public final OrderService orderService;

    public OrderController(OrderService orderService, OrderItemService orderItemService) {
        this.orderItemService = orderItemService;
        this.orderService = orderService;
    }
    @GetMapping
    public List<Order> getOrders() {
        return orderService.getOrders();
    }
    @GetMapping("/{orderId}")
    public List<OrderItem> getOrderItemsOfOrderId(@PathVariable String orderId) throws IdNotFoundException {
        return orderService.getOrderItemsOfOrderId(orderId);
    }
    @PostMapping
    public Order addOrder(@RequestBody OrderRequest orderRequest) throws NoOrderItemInOrderException {
        return orderService.addOrder(orderRequest);
    }
    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable String id, @RequestBody OrderStatus status) throws IdNotFoundException {
        return orderService.updateOrder(id, status);
    }
}
