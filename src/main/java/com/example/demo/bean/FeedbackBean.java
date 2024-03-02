package com.example.demo.bean;

import com.example.demo.entity.FeedbackEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 反馈
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class FeedbackBean extends PageParam {

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
     * 内容
     */
    private String content;
    
    /**
     * 反馈
     */
    private String feedback;
    
    public FeedbackBean from(FeedbackEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.userId = entity.getUserId();
        this.content = entity.getContent();
        this.feedback = entity.getFeedback();
        return this;
    }

    public FeedbackEntity toEntity() {
        FeedbackEntity entity = new FeedbackEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setUserId(this.userId);
        entity.setContent(this.content);
        entity.setFeedback(this.feedback);
        return entity;
    }

}