package com.example.demo.bean;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Map;

@Data
@Accessors(chain = true)
public class RecommendSchoolBean {

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
     * 批次
     */
    private String batch;

    /**
     * 分数
     */
    private Map<String, Integer> scoreMap;

    /**
     * 排名
     */
    private Map<String, Integer> orderMap;

}
