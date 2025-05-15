package com.example.backend.exception;

public class IdNotFoundException extends Exception{
    public IdNotFoundException(String id) {

        super("Product Id " + id + " not found");
    }
}
