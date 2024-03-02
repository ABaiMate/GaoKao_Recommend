package com.example.demo.bean;

import com.example.demo.entity.BbsEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 论坛
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class BbsBean extends PageParam {

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
     * 标题
     */
    private String title;
    
    /**
     * 评论内容
     */
    private String content;
    
    public BbsBean from(BbsEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.userId = entity.getUserId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        return this;
    }

    public BbsEntity toEntity() {
        BbsEntity entity = new BbsEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setUserId(this.userId);
        entity.setTitle(this.title);
        entity.setContent(this.content);
        return entity;
    }

}