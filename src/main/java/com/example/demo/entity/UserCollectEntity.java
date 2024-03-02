package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.example.mx3.mapper.OptionalModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 用户收藏
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "user_collect", autoResultMap = true)
public class UserCollectEntity extends OptionalModel<UserCollectEntity> {

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
     * 用户ID
     */
    private Long userId;
    
    /**
     * 目标类型
     */
    private String targetType;
    
    /**
     * 目标ID
     */
    private Long targetId;
    
}