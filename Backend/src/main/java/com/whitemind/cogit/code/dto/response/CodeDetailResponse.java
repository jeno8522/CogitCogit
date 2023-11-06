package com.whitemind.cogit.code.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class CodeDetailResponse {
    private int codeId;
    private int algorithmQuestId;
    private String algorithmQuestPlatform;
    private int memberId;
    private String codeContent;
    private LocalDate createAt;
    private String codeAnalyze;
    private String codeLanguage;
    private double codeRunningTime;
    private boolean codeSolved;
}
