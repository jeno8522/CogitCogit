package com.whitemind.cogit.common.error;

public class NotExistAccesTokenException extends RuntimeException{
    public NotExistAccesTokenException() {
        super(ExceptionCode.NOT_EXIST_ACCESSTOKEN_EXCEPTION.getErrorMessage());
    }

    public NotExistAccesTokenException(String message) {
        super(message);
    }
}
