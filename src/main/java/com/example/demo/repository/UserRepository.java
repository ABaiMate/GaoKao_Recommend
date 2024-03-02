package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.UserBean;
import com.example.demo.entity.UserEntity;
import com.example.demo.mapper.UserMapper;
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
 * 用户
 */
@Repository
public class UserRepository {

    @Autowired
    private UserMapper userMapper;

    //
    public Optional<UserBean> getById(long id) {
        return userMapper.selectById(id)
                .map(entity -> new UserBean().from(entity));
    }

    public List<UserBean> search(String keyword, List<String> roleCodeList) {
        var queries = Queries.with(UserEntity.class)
                .in(CollUtil.isNotEmpty(roleCodeList), UserEntity::getRoleCode, roleCodeList)
                .and(q -> q.like(UserEntity::getNickname, keyword)
                        .or()
                        .like(UserEntity::getUsername, keyword)
                        .or()
                        .eq(UserEntity::getId, keyword))
                .limit(100);
        var list = userMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserBean().from(entity)
        );
    }

    public Optional<UserBean> getByUsername(String username) {
        var queries = Queries.with(UserEntity.class)
                .eq(UserEntity::getUsername, username);
        return userMapper.selectOne(queries)
                .map(entity -> new UserBean().from(entity));
    }

    public List<UserBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(UserEntity.class)
                .in(UserEntity::getId, idList);
        var list = userMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserBean().from(entity)
        );
    }

    public List<UserBean> getList(UserBean query) {
        var queries = Queries.with(UserEntity.class)
                .like(StrUtil.isNotBlank(query.getUsername()), UserEntity::getUsername, query.getUsername())
                .like(StrUtil.isNotBlank(query.getNickname()), UserEntity::getNickname, query.getNickname())
                .eq(StrUtil.isNotBlank(query.getRoleCode()), UserEntity::getRoleCode, query.getRoleCode());
        var list = userMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new UserBean().from(entity)
        );
    }

    public PageResultBean<UserBean> getPage(UserBean query) {
        var queries = Queries.with(UserEntity.class)
                .like(StrUtil.isNotBlank(query.getUsername()), UserEntity::getUsername, query.getUsername())
                .like(StrUtil.isNotBlank(query.getNickname()), UserEntity::getNickname, query.getNickname())
                .eq(StrUtil.isNotBlank(query.getRoleCode()), UserEntity::getRoleCode, query.getRoleCode());
        var page = userMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new UserBean().from(entity)
        );
    }

    public long create(UserBean user) {
        var entity = user.toEntity();
        userMapper.insert(entity);
        user.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, UserBean user) {
        this.getById(id).orElseThrow(() -> new BizException("用户 不存在"));
        var entity = user.toEntity();
        entity.setId(id);
        userMapper.updateById(entity);
        return entity.getId();
    }

    public UserBean deleteById(long id) {
        var user = this.getById(id)
                .orElseThrow(() -> new BizException("用户 不存在"));
        userMapper.deleteById(id);
        return user;
    }

}
