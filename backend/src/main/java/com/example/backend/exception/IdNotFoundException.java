package com.example.backend.exception;

public class IdNotFoundException extends Exception{
    public IdNotFoundException(String id, String sender) {

        super(sender+" Id " + id + " not found");
    }
}
