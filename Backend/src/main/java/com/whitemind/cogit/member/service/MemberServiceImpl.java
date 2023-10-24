package com.whitemind.cogit.member.service;

import com.whitemind.cogit.common.util.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;

@Slf4j
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService{
    private final JwtService jwtService;
    @Override
    public void setToken(Long memberId, HttpServletResponse response) {
        log.info("UserServiceImpl_setToken | 사용자 인증 완료 , 토큰 부여");
        String accessToken = jwtService.createAccessToken("memberId",memberId); // key, value
        response.setHeader("Authorization", accessToken);
    }
}
