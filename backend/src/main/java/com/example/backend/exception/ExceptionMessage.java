package com.example.backend.exception;

import java.time.Instant;

public record ExceptionMessage(
        String error,
        Instant timestamp,
        String httpStatus) {
}
