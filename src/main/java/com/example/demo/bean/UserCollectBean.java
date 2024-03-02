package com.example.demo.bean;

import com.example.demo.entity.UserCollectEntity;
import com.example.mx3.bean.PageParam;
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
public class UserCollectBean extends PageParam {

    /**
     * ID
     */
    private Long id;
    
    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    
    /**
     * 更新时间
     */
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
    
    public UserCollectBean from(UserCollectEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.userId = entity.getUserId();
        this.targetType = entity.getTargetType();
        this.targetId = entity.getTargetId();
        return this;
    }

    public UserCollectEntity toEntity() {
        UserCollectEntity entity = new UserCollectEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setUserId(this.userId);
        entity.setTargetType(this.targetType);
        entity.setTargetId(this.targetId);
        return entity;
    }

}