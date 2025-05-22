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

    public List<OrderItem> getOrderItemsOfOrder(String orderId) {
       return orderItemRepro.getOrderItemsByOrderId(orderId);
    }

    public OrderItem addOrderItem(OrderItemDto orderItemDto) {
        OrderItem newOrderItem = new OrderItem(
                serviceId.generateId(),
                orderItemDto.orderId(),
                orderItemDto.productId(),
                orderItemDto.count()
        );
        orderItemRepro.save(newOrderItem);
        return newOrderItem;
    }

    public OrderItem updateOrderItem(String id, OrderItemDto orderItemDto) throws IdNotFoundException {
        if(orderItemRepro.existsById(id)){
            OrderItem newOrderItem = new OrderItem(
                    id,
                    orderItemDto.orderId(),
                    orderItemDto.productId(),
                    orderItemDto.count()
            );
            orderItemRepro.save(newOrderItem);
            return newOrderItem;
        }
        throw new IdNotFoundException(id, "Order item");
    }

    public boolean deleteOrderItem(String id)  throws IdNotFoundException{
        if(orderItemRepro.existsById(id)){
            orderItemRepro.deleteById(id);
            return true;
        }
        throw new IdNotFoundException(id, "Order item");
    }
}
