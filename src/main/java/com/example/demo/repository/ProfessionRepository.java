package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.ProfessionBean;
import com.example.demo.entity.ProfessionEntity;
import com.example.demo.mapper.ProfessionMapper;
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
 * 职业
 */
@Repository
public class ProfessionRepository {

    @Autowired
    private ProfessionMapper professionMapper;

    public ProfessionMapper getProfessionMapper() {
        return professionMapper;
    }

    public Optional<ProfessionBean> getById(long id) {
        return professionMapper.selectById(id)
                .map(entity -> new ProfessionBean().from(entity));
    }

    public List<ProfessionBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(ProfessionEntity.class)
                .in(ProfessionEntity::getId, idList);
        var list = professionMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new ProfessionBean().from(entity));
    }

    public List<ProfessionBean> getList(ProfessionBean query) {
        var queries = Queries.with(ProfessionEntity.class);
        var list = professionMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new ProfessionBean().from(entity)
        );
    }

    public PageResultBean<ProfessionBean> getPage(ProfessionBean query) {
        var queries = Queries.with(ProfessionEntity.class)
                .like(StrUtil.isNotBlank(query.getName()), ProfessionEntity::getName, query.getName())
                .like(StrUtil.isNotBlank(query.getTag()), ProfessionEntity::getTag, query.getTag())
                .like(StrUtil.isNotBlank(query.getBelong()), ProfessionEntity::getBelong, query.getBelong())
                .like(StrUtil.isNotBlank(query.getContent()), ProfessionEntity::getCounterparts, query.getContent())
                .orderByDesc(ProfessionEntity::getId);
        var page = professionMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new ProfessionBean().from(entity)
        );
    }

    public long create(ProfessionBean profession) {
        var entity = profession.toEntity();
        professionMapper.insert(entity);
        profession.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, ProfessionBean profession) {
        this.getById(id).orElseThrow(() -> new BizException("职业 不存在"));
        var entity = profession.toEntity();
        entity.setId(id);
        professionMapper.updateById(entity);
        return entity.getId();
    }

    public ProfessionBean deleteById(long id) {
        var profession = this.getById(id)
                .orElseThrow(() -> new BizException("职业 不存在"));
        professionMapper.deleteById(id);
        return profession;
    }

}