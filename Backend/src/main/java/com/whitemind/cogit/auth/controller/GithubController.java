package com.whitemind.cogit.auth.controller;

import com.whitemind.cogit.auth.service.GithubService;
import com.whitemind.cogit.common.response.ResponseResult;
import com.whitemind.cogit.common.response.SingleResponseResult;
import com.whitemind.cogit.member.dto.Member;
import com.whitemind.cogit.member.repository.MemberRepository;
import com.whitemind.cogit.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/oauth")
public class GithubController {
    private final GithubService githubService;
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    @GetMapping("/github/callback")
    public ResponseResult refreshMemberRequest(@RequestParam String code, HttpServletResponse response) throws Exception {
        log.info("getAccessTokenRequest | Member Github AccessToken 갱신");
        String accessToken = githubService.getAccessToken(code);
        Member member = githubService.getGithubUserInfo(accessToken);
        memberRepository.save(member);
        memberService.setToken(member.getMemberId(), response);
        System.out.println(response.getHeader("Authorization"));
        return new SingleResponseResult<>("OK");
    }
}
