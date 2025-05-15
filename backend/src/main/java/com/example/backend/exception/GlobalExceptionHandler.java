package com.example.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler extends Exception{

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionMessage> handleUnknownException(Exception e){
        ExceptionMessage error = new ExceptionMessage("Error: "+e.getMessage(),
                Instant.now(),
                HttpStatus.INTERNAL_SERVER_ERROR.name());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR );
    }
    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<ExceptionMessage> handleIdNotFoundException(IdNotFoundException e){
        ExceptionMessage error = new ExceptionMessage("Error: "+e.getMessage(),
                Instant.now(),
                HttpStatus.NOT_FOUND.name());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

}
