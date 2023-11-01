package com.whitemind.cogit.common.intercepter;

import com.whitemind.cogit.common.util.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtInterceptor implements HandlerInterceptor {

    private final JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String token = request.getHeader("Authorization");
        return true;
//		if (token != null && jwtService.validateToken(token.split(" ")[1])) {
//			return true;
//		} else {
//			log.info("Access 토큰이 없거나 유효하지 않습니다.");
//			throw new NotExistAccessTokenException();
//		}
    }
}
