package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.UserCollectBean;
import com.example.demo.entity.UserCollectEntity;
import com.example.demo.mapper.UserCollectMapper;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.exception.BizException;
import com.example.mx3.mybatis.Queries;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * 用户收藏
 */
@Repository
public class UserCollectRepository {

    @Autowired
    private UserCollectMapper userCollectMapper;

    public Optional<UserCollectBean> getById(long id) {
        return userCollectMapper.selectById(id)
                .map(entity -> new UserCollectBean().from(entity));
    }

    public Optional<UserCollectBean> getByTargetId(long userId, String targetType, long targetId) {
        var queries = Queries.with(UserCollectEntity.class)
                .eq(UserCollectEntity::getUserId, userId)
                .eq(UserCollectEntity::getTargetType, targetType)
                .eq(UserCollectEntity::getTargetId, targetId);
        return userCollectMapper.selectOne(queries)
                .map(entity -> new UserCollectBean().from(entity));
    }

    public List<UserCollectBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(UserCollectEntity.class)
                .in(UserCollectEntity::getId, idList);
        var list = userCollectMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserCollectBean().from(entity)
        );
    }

    public List<UserCollectBean> getList(UserCollectBean query) {
        var queries = Queries.with(UserCollectEntity.class);
        var list = userCollectMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserCollectBean().from(entity)
        );
    }

    public PageResultBean<UserCollectBean> getPage(UserCollectBean query) {
        var queries = Queries.with(UserCollectEntity.class)
                .eq(StrUtil.isNotBlank(query.getTargetType()), UserCollectEntity::getTargetType, query.getTargetType());
        var page = userCollectMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new UserCollectBean().from(entity)
        );
    }

    public long create(UserCollectBean userCollect) {
        var entity = userCollect.toEntity();
        userCollectMapper.insert(entity);
        userCollect.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, UserCollectBean userCollect) {
        this.getById(id).orElseThrow(() -> new BizException("用户收藏 不存在"));
        var entity = userCollect.toEntity();
        entity.setId(id);
        userCollectMapper.updateById(entity);
        return entity.getId();
    }

    public UserCollectBean deleteById(long id) {
        var userCollect = this.getById(id)
                .orElseThrow(() -> new BizException("用户收藏 不存在"));
        userCollectMapper.deleteById(id);
        return userCollect;
    }

}