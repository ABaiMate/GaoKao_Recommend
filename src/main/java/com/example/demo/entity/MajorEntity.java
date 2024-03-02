package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.example.mx3.mapper.OptionalModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 专业
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "major", autoResultMap = true)
public class MajorEntity extends OptionalModel<MajorEntity> {

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
     * 专业代码
     */
    private String majorCode;
    
    /**
     * 专业名称
     */
    private String majorName;
    
    /**
     * 专业类型
     */
    private String majorType;
    
    /**
     * 专业门类
     */
    private String majorField;
    
    /**
     * 授予门类
     */
    private String grantField;
    
    /**
     * 修业年限
     */
    private String year;
    
}