package com.whitemind.cogit.schedule.controller;

import com.whitemind.cogit.common.response.ResponseResult;
import com.whitemind.cogit.member.dto.request.CreateStudyRequest;
import com.whitemind.cogit.schedule.dto.request.CreateScheduleRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/schedule")
public class ScheduleController {
    @PostMapping("/add")
    public ResponseResult createStudySchetule(@RequestBody CreateScheduleRequest schedule) throws Exception {
        log.info("createStudySchetule | Study 스케줄 생성 요청");
        System.out.println(schedule.getScheduleName());
        return ResponseResult.successResponse;
    }
}
