package com.whitemind.cogit.member.service;

import javax.servlet.http.HttpServletRequest;

public interface MemberService {
    void modifyNickname(String memberNickname, HttpServletRequest request);
}
