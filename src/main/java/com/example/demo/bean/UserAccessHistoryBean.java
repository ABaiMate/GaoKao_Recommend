package com.example.demo.bean;

import com.example.demo.entity.UserAccessHistoryEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 用户访问记录
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class UserAccessHistoryBean extends PageParam {

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
     * 项目ID
     */
    private Long itemId;
    
    /**
     * 浏览次数
     */
    private Long times;
    
    public UserAccessHistoryBean from(UserAccessHistoryEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.userId = entity.getUserId();
        this.itemId = entity.getItemId();
        this.times = entity.getTimes();
        return this;
    }

    public UserAccessHistoryEntity toEntity() {
        UserAccessHistoryEntity entity = new UserAccessHistoryEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setUserId(this.userId);
        entity.setItemId(this.itemId);
        entity.setTimes(this.times);
        return entity;
    }

}