package com.example.backend.service;

import com.example.backend.exception.IdNotFoundException;
import com.example.backend.model.OrderItem;
import com.example.backend.model.OrderItemDto;
import com.example.backend.repo.OrderItemRepro;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;


class OrderItemServiceTest {

    OrderItemRepro mockOrderItemRepro;
    ServiceId mockServiceId;
    OrderItemService orderItemService;

    OrderItemDto orderItemDto;
    OrderItem expected;
    OrderItem actual;


    @BeforeEach
    void setUp(){
        mockServiceId = Mockito.mock(ServiceId.class);
        mockOrderItemRepro = Mockito.mock(OrderItemRepro.class);
        orderItemService= new OrderItemService(mockOrderItemRepro, mockServiceId);

        orderItemDto = new OrderItemDto( "productId", 1);
        expected = new OrderItem("id", "orderId", "productId", 1);
    }

    @Test
    void getOrderItemsOfOrderId_shouldThrowIdNotFoundException_whenCalledWithInvalidId() {
        Mockito.when(mockOrderItemRepro.getOrderItemsByOrderId("wrongID")).thenReturn(Optional.empty());
        // then
        assertThrows(IdNotFoundException.class, () -> orderItemService.getOrderItemsOfOrderId("wrongID"));
    }
    @Test
    void getOrderItemsOfOrderId_shouldReturnList_whenCalledWithValidId() throws IdNotFoundException {
        // given
        mockOrderItemRepro.save(expected);
        // when
        Mockito.when(mockOrderItemRepro.getOrderItemsByOrderId(expected.orderId())).thenReturn(Optional.of(List.of(expected)));
        List<OrderItem> actual = orderItemService.getOrderItemsOfOrderId(expected.orderId());
        // then
        assertEquals(List.of(expected), actual);
    }

    @Test
    void addOrderItem() {
        // when
        Mockito.when(mockServiceId.generateId()).thenReturn(expected.id());
        Mockito.when(mockOrderItemRepro.save(expected)).thenReturn(expected);
        actual = orderItemService.addOrderItem(expected.orderId(), orderItemDto);
        // then
        assertEquals(expected, actual);
        Mockito.verify(mockOrderItemRepro, Mockito.times(1)).save(expected);
        Mockito.verify(mockServiceId, Mockito.times(1)).generateId();
    }
}