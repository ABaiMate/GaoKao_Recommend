package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler;
import com.example.mx3.mapper.OptionalModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * 职业
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "profession", autoResultMap = true)
public class ProfessionEntity extends OptionalModel<ProfessionEntity> {

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
     * 名称
     */
    private String name;
    
    /**
     * 标签
     */
    private String tag;
    
    /**
     * 隶属 行业
     */
    private String belong;
    
    /**
     * 相似职业
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    private List<String> related;
    
    /**
     * 相关的专业
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    private List<String> counterparts;
    
    /**
     * 内容
     */
    private String content;
    
    /**
     * 信息
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    private Map<String, Object> info;
    
}