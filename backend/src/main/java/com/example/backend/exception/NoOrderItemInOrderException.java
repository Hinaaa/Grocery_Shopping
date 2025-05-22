package com.example.backend.exception;

public class NoOrderItemInOrderException extends Exception {
    public NoOrderItemInOrderException(String id, String sender) {

        super(sender+": says no order item in order with id "+id);
    }
}
