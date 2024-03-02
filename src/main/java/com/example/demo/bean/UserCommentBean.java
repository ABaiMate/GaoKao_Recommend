package com.example.demo.bean;

import com.example.demo.entity.UserCommentEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 用户评论
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class UserCommentBean extends PageParam {

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
     * 用户
     */
    private UserBean user;

    /**
     * 目标类型
     */
    private String targetType;

    /**
     * 目标ID
     */
    private Long targetId;

    /**
     * 评论内容
     */
    private String content;

    /**
     * 父评论
     */
    private Long parentId;

    /**
     * 子评论
     */
    private List<UserCommentBean> children;

    public UserCommentBean from(UserCommentEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.userId = entity.getUserId();
        this.targetType = entity.getTargetType();
        this.targetId = entity.getTargetId();
        this.content = entity.getContent();
        this.parentId = entity.getParentId();
        return this;
    }

    public UserCommentEntity toEntity() {
        UserCommentEntity entity = new UserCommentEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setUserId(this.userId);
        entity.setTargetType(this.targetType);
        entity.setTargetId(this.targetId);
        entity.setContent(this.content);
        entity.setParentId(this.parentId);
        return entity;
    }
}