package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.SettingBean;
import com.example.demo.entity.SettingEntity;
import com.example.demo.mapper.SettingMapper;
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

/**
 * 基本配置
 */
@Repository
public class SettingRepository {

    @Autowired
    private SettingMapper settingMapper;

    public Optional<SettingBean> getById(long id) {
        return settingMapper.selectById(id)
                .map(entity -> new SettingBean().from(entity));
    }

    public List<SettingBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(SettingEntity.class)
                .in(SettingEntity::getId, idList);
        var list = settingMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SettingBean().from(entity)
        );
    }

    public List<SettingBean> getListByKey(String key) {
        var queries = Queries.with(SettingEntity.class)
                .eq(SettingEntity::getKey, key);
        var list = settingMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SettingBean().from(entity)
        );
    }

    public List<SettingBean> getList(SettingBean query) {
        var queries = Queries.with(SettingEntity.class);
        var list = settingMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SettingBean().from(entity)
        );
    }

    public PageResultBean<SettingBean> getPage(SettingBean query) {
        var queries = Queries.with(SettingEntity.class)
                .orderByDesc(SettingEntity::getId);
        var page = settingMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new SettingBean().from(entity)
        );
    }

    public long create(SettingBean setting) {
        var entity = setting.toEntity();
        settingMapper.insert(entity);
        setting.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, SettingBean setting) {
        this.getById(id).orElseThrow(() -> new BizException("基本配置 不存在"));
        var entity = setting.toEntity();
        entity.setId(id);
        settingMapper.updateById(entity);
        return entity.getId();
    }

    public SettingBean deleteById(long id) {
        var setting = this.getById(id)
                .orElseThrow(() -> new BizException("基本配置 不存在"));
        settingMapper.deleteById(id);
        return setting;
    }

}