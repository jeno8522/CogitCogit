package com.whitemind.cogit.member.service;

import javax.servlet.http.HttpServletResponse;

public interface MemberService {
    void setToken(Long memberId , HttpServletResponse response);
}
