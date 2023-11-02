package com.whitemind.cogit.member.service;

import com.whitemind.cogit.member.entity.Member;
import com.whitemind.cogit.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService{
    private final MemberRepository memberRepository;
    @Override
    public void modifyNickname(String memberNickname, HttpServletRequest request) {
        Member member = memberRepository.findMembersByMemberId((Integer) request.getAttribute("memberId"));
        member.updateNickname(memberNickname);
        System.out.println(member.getMemberNickname());
        memberRepository.save(member);
    }
}
