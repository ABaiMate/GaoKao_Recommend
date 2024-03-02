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
 * 学校
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "school", autoResultMap = true)
public class SchoolEntity extends OptionalModel<SchoolEntity> {

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
    
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
    
    /**
     * 学校名称
     */
    private String schoolName;
    
    /**
     * 省份
     */
    private String province;
    
    /**
     * 其他信息
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    private Map<String, Object> info;
    
    /**
     * 简介 html
     */
    private String synopsis;
    
    /**
     * 全景地图地址
     */
    private String mapUrl;
    
}