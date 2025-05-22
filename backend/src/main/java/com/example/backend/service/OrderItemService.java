package com.example.backend.service;

import com.example.backend.exception.IdNotFoundException;
import com.example.backend.model.OrderItem;
import com.example.backend.model.OrderItemDto;
import com.example.backend.repo.OrderItemRepro;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {

    private final OrderItemRepro orderItemRepro;
    private final ServiceId serviceId;

    public OrderItemService(OrderItemRepro orderItemRepro, ServiceId serviceId){
        this.orderItemRepro = orderItemRepro;
        this.serviceId = serviceId;
    }

    public List<OrderItem> getOrderItemsOfOrderId(String orderId) throws IdNotFoundException {
       return orderItemRepro.getOrderItemsByOrderId(orderId).orElseThrow(()->new IdNotFoundException(orderId, "OrderItem"));
    }
    public OrderItem addOrderItem(String orderId, OrderItemDto orderItemDto) {
        OrderItem newOrderItem = new OrderItem(
                serviceId.generateId(),
                orderId,
                orderItemDto.productId(),
                orderItemDto.count()
        );
        orderItemRepro.save(newOrderItem);
        return newOrderItem;
    }
}
