package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.collection.ListUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.UserAccessHistoryBean;
import com.example.demo.entity.UserAccessHistoryEntity;
import com.example.demo.mapper.UserAccessHistoryMapper;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.exception.BizException;
import com.example.mx3.mybatis.Queries;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * 用户访问记录
 */
@Repository
public class UserAccessHistoryRepository {

    @Autowired
    private UserAccessHistoryMapper userAccessHistoryMapper;

    public Optional<UserAccessHistoryBean> getById(long id) {
        return userAccessHistoryMapper.selectById(id)
                .map(entity -> new UserAccessHistoryBean().from(entity));
    }

    public List<UserAccessHistoryBean> getListByUserId(Long userId) {
        var queries = Queries.with(UserAccessHistoryEntity.class)
                .eq(UserAccessHistoryEntity::getUserId, userId)
                ;
        var list = userAccessHistoryMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserAccessHistoryBean().from(entity)
        );
    }

    public List<UserAccessHistoryBean> getListByItemId(Long itemId) {
        var queries = Queries.with(UserAccessHistoryEntity.class)
                .eq(UserAccessHistoryEntity::getItemId, itemId)
                ;
        var list = userAccessHistoryMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserAccessHistoryBean().from(entity)
        );
    }

    public List<UserAccessHistoryBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(UserAccessHistoryEntity.class)
                .in(UserAccessHistoryEntity::getId, idList);
        var list = userAccessHistoryMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserAccessHistoryBean().from(entity)
        );
    }

    public List<UserAccessHistoryBean> getList(UserAccessHistoryBean query) {
        var queries = Queries.with(UserAccessHistoryEntity.class);
        var list = userAccessHistoryMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserAccessHistoryBean().from(entity)
        );
    }

    public PageResultBean<UserAccessHistoryBean> getPage(UserAccessHistoryBean query) {
        var queries = Queries.with(UserAccessHistoryEntity.class)
                .orderByDesc(UserAccessHistoryEntity::getId);
        var page = userAccessHistoryMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new UserAccessHistoryBean().from(entity)
        );
    }

    public long create(UserAccessHistoryBean userAccessHistory) {
        var entity = userAccessHistory.toEntity();
        userAccessHistoryMapper.insert(entity);
        userAccessHistory.setId(entity.getId());
        return entity.getId();
    }

    public void createList(List<UserAccessHistoryBean> accessList) {
        for (List<UserAccessHistoryBean> list : ListUtil.partition(accessList, 1000)) {
            userAccessHistoryMapper.insertList(
                    list.stream()
                            .map(UserAccessHistoryBean::toEntity)
                            .collect(Collectors.toList())
            );
        }
    }

    public long modifyById(long id, UserAccessHistoryBean userAccessHistory) {
        this.getById(id).orElseThrow(() -> new BizException("用户访问记录 不存在"));
        var entity = userAccessHistory.toEntity();
        entity.setId(id);
        userAccessHistoryMapper.updateById(entity);
        return entity.getId();
    }

    public UserAccessHistoryBean deleteById(long id) {
        var userAccessHistory = this.getById(id)
                .orElseThrow(() -> new BizException("用户访问记录 不存在"));
        userAccessHistoryMapper.deleteById(id);
        return userAccessHistory;
    }

    public void deleteAll() {
        userAccessHistoryMapper.delete(Queries.emptyWrapper());
    }
}