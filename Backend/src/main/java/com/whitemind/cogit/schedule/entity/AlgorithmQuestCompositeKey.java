package com.whitemind.cogit.schedule.entity;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class AlgorithmQuestCompositeKey implements Serializable {
    private int algorithmQuestId;
    private AlgorithmQuestPlatform algorithmQuestPlatform;
}
