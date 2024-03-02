package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.example.mx3.mapper.OptionalModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 学校分数线
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "school_line", autoResultMap = true)
public class SchoolLineEntity extends OptionalModel<SchoolLineEntity> {

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
     * 学校ID
     */
    private Long schoolId;
    
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