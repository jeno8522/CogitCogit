package com.whitemind.cogit.schedule.service;

import com.whitemind.cogit.schedule.dto.request.CreateScheduleRequest;
import com.whitemind.cogit.schedule.dto.response.GetStudyDetailResponse;

import javax.servlet.http.HttpServletRequest;

public interface ScheduleService {

    void createSchedule(CreateScheduleRequest schedule, HttpServletRequest request);

    GetStudyDetailResponse getStudyDetail(int teamId, HttpServletRequest request);

}
