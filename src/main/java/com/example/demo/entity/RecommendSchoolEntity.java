package com.example.demo.entity;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class RecommendSchoolEntity {

    /**
     *
     */
    private Long id;

    /**
     * 学校名称
     */
    private String schoolName;

    /**
     * 省份
     */
    private String province;

    /**
     * 年份
     */
    private String year;

    /**
     * 科目类型
     */
    private String subjectType;

    /**
     * 批次
     */
    private String batch;

    /**
     * 分数
     */
    private Integer score;

    /**
     * 位次
     */
    private Integer order;

}
