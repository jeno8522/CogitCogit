package com.whitemind.cogit.common.error;

public class NotExistAccessTokenException extends RuntimeException{
    public NotExistAccessTokenException() {
        super(ExceptionCode.NOT_EXIST_ACCESSTOKEN_EXCEPTION.getErrorMessage());
    }

    public NotExistAccessTokenException(String message) {
        super(message);
    }
}
