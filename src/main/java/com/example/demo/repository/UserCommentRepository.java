package com.example.demo.repository;

import com.example.demo.bean.UserCommentBean;
import com.example.demo.entity.UserCommentEntity;
import com.example.demo.mapper.UserCommentMapper;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.exception.BizException;
import com.example.mx3.mybatis.Queries;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * 用户评论
 */
@Repository
public class UserCommentRepository {

    @Autowired
    private UserCommentMapper userCommentMapper;

    public Optional<UserCommentBean> getById(long id) {
        return userCommentMapper.selectById(id)
                .map(entity -> new UserCommentBean().from(entity));
    }

    public Long countByTargetId(String targetType, Long targetId) {
        var queries = Queries.with(UserCommentEntity.class)
                .eq(UserCommentEntity::getTargetType, targetType)
                .eq(UserCommentEntity::getTargetId, targetId);
        return userCommentMapper.selectCount(queries);
    }

    public List<UserCommentBean> getListByParentId(Long parentId) {
        var queries = Queries.with(UserCommentEntity.class);
        queries.eq(UserCommentEntity::getParentId, parentId);
        return ConvertUtil.from(
                userCommentMapper.selectList(queries),
                entity -> new UserCommentBean().from(entity)
        );
    }

    public List<UserCommentBean> getList(UserCommentBean query) {
        var queries = Queries.with(UserCommentEntity.class);
        var list = userCommentMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserCommentBean().from(entity)
        );
    }

    public PageResultBean<UserCommentBean> getPage(UserCommentBean query) {
        var queries = Queries.with(UserCommentEntity.class)
                .isNull(UserCommentEntity::getParentId)
                .eq(Objects.nonNull(query.getTargetType()), UserCommentEntity::getTargetType, query.getTargetType())
                .eq(Objects.nonNull(query.getTargetId()), UserCommentEntity::getTargetId, query.getTargetId())
                .eq(Objects.nonNull(query.getUserId()), UserCommentEntity::getUserId, query.getUserId());
        var page = userCommentMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new UserCommentBean().from(entity)
        );
    }

    public long create(UserCommentBean userComment) {
        var entity = userComment.toEntity();
        userCommentMapper.insert(entity);
        userComment.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, UserCommentBean userComment) {
        this.getById(id).orElseThrow(() -> new BizException("用户评论 不存在"));
        var entity = userComment.toEntity();
        entity.setId(id);
        userCommentMapper.updateById(entity);
        return entity.getId();
    }

    public UserCommentBean deleteById(long id) {
        var userComment = this.getById(id)
                .orElseThrow(() -> new BizException("用户评论 不存在"));
        userCommentMapper.deleteById(id);
        return userComment;
    }

}