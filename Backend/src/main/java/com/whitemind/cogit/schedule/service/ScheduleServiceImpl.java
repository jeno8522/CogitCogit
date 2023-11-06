package com.whitemind.cogit.schedule.service;

import com.whitemind.cogit.common.error.CustomException;
import com.whitemind.cogit.common.error.ExceptionCode;
import com.whitemind.cogit.member.entity.Member;
import com.whitemind.cogit.member.entity.MemberAlgorithmQuest;
import com.whitemind.cogit.member.entity.Team;
import com.whitemind.cogit.member.repository.MemberAlgorithmQuestRepository;
import com.whitemind.cogit.member.repository.MemberRepository;
import com.whitemind.cogit.member.repository.TeamRepository;
import com.whitemind.cogit.schedule.dto.request.CreateScheduleRequest;
import com.whitemind.cogit.schedule.entity.AlgorithmQuest;
import com.whitemind.cogit.schedule.entity.AlgorithmQuestPlatform;
import com.whitemind.cogit.schedule.entity.Schedule;
import com.whitemind.cogit.schedule.repository.AlgorithmQuestRepository;
import com.whitemind.cogit.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class ScheduleServiceImpl implements ScheduleService{
    private final TeamRepository teamRepository;
    private final MemberRepository memberRepository;
    private final ScheduleRepository scheduleRepository;
    private final AlgorithmQuestRepository algorithmQuestRepository;
    private final MemberAlgorithmQuestRepository memberAlgorithmQuestRepository;

    @Override
    public void createSchedule(CreateScheduleRequest scheduleRequest, HttpServletRequest request) {
        Team study = teamRepository.findById(scheduleRequest.getStudyId())
                .orElseThrow(() -> new CustomException(ExceptionCode.NOT_EXIST_TEAM_EXCEPTION));

        // 스케줄 등록
        Schedule schedule = Schedule.builder()
                .scheduleName(scheduleRequest.getScheduleName())
                .scheduleStartAt(scheduleRequest.getScheduleStart())
                .scheduleEndAt(scheduleRequest.getScheduleEnd())
                .team(study).build();
        scheduleRepository.save(schedule);


        Member member = memberRepository.findMembersByMemberId((Integer) request.getAttribute("memberId"));

        // 해당 스케줄에 각 문제 등록
        for (String questUrl : scheduleRequest.getAlgorithmQuestList()){
            String [] questNumber = questUrl.split("/");

            String url = questNumber[questNumber.length - 1];
            AlgorithmQuest algorithmQuest = AlgorithmQuest.builder()
                    .algorithmQuestNumber(Integer.parseInt(url))
                    .algorithmQuestUrl(questUrl)
                    .algorithmQuestPlatform((questUrl.contains("programmers") ? AlgorithmQuestPlatform.PROGRAMMERS : AlgorithmQuestPlatform.BAEKJOON))
                    .schedule(schedule)
                    .build();
            algorithmQuestRepository.save(algorithmQuest);

            MemberAlgorithmQuest memberAlgorithmQuest = MemberAlgorithmQuest.builder()
                    .algorithmQuest(algorithmQuest)
                    .member(member)
                    .build();
            memberAlgorithmQuestRepository.save(memberAlgorithmQuest);
        }
    }
}
