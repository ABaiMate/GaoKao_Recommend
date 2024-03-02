package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler;
import com.example.mx3.mapper.OptionalModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;

/**
 * 学校专业
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "school_major", autoResultMap = true)
public class SchoolMajorEntity extends OptionalModel<SchoolMajorEntity> {

    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
    
    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    
    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
    
    /**
     * 学校
     */
    private Long schoolId;
    
    /**
     * 文理
     */
    private String type;
    
    /**
     * 年份
     */
    private String year;
    
    /**
     * 重点学科
     */
    private String focusMajor;
    
    /**
     * 特色学科
     */
    private String specialMajor;
    
    /**
     * 国家重点实验室
     */
    private String labMajor;
    
    /**
     * 一流学科
     */
    private String courseMajor;
    
    /**
     * 备用信息
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    private Map<String, Object> info;
    
}