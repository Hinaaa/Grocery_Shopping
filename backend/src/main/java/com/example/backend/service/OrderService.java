package com.example.backend.service;

import com.example.backend.enums.OrderStatus;
import com.example.backend.exception.IdNotFoundException;
import com.example.backend.exception.NoOrderItemInOrderException;
import com.example.backend.model.Order;
import com.example.backend.model.OrderItem;
import com.example.backend.model.OrderItemDto;
import com.example.backend.repo.OrderRepo;
import com.example.backend.request.OrderRequest;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepo orderRepo;
    private final OrderItemService orderItemService;

    public OrderService(OrderRepo orderRepo, OrderItemService orderItemService) {
        this.orderRepo = orderRepo;
        this.orderItemService = orderItemService;
    }

    public List<Order> getOrders() {
        return orderRepo.findAll();
    }

    public List<OrderItem> getOrderItemsOfOrderId(String id) throws IdNotFoundException {
        return orderItemService.getOrderItemsOfOrderId(id);

    }

    public Order addOrder(OrderRequest orderRequest) throws NoOrderItemInOrderException {
        String orderId = orderRequest.orderId();
        List<OrderItemDto> orderItems = orderRequest.orderItemList();
        if (orderItems.isEmpty()) {
            throw new NoOrderItemInOrderException(orderId, "Order");
        }
        orderItems.forEach(o -> orderItemService.addOrderItem(orderId, o));
        Order order = new Order(
                orderId,
                Instant.now(),
                orderRequest.totalPrice(),
                OrderStatus.ORDERED
        );
        orderRepo.save(order);
        return order;
    }

    public Order updateOrder(String id, OrderStatus status) throws IdNotFoundException {
        Order oldOrder = orderRepo.findById(id).orElseThrow(()->new IdNotFoundException(id, "Order"));
        Order updatedOrder = new Order(oldOrder.id(), oldOrder.date(), oldOrder.total(), status);
        orderRepo.save(updatedOrder);
        return updatedOrder;
    }
}
