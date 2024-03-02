package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.MajorBean;
import com.example.demo.entity.MajorEntity;
import com.example.demo.mapper.MajorMapper;
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
 * 专业
 */
@Repository
public class MajorRepository {

    @Autowired
    private MajorMapper majorMapper;

    public Optional<MajorBean> getById(long id) {
        return majorMapper.selectById(id)
                .map(entity -> new MajorBean().from(entity));
    }

    public Optional<MajorBean> getByMajorCode(String majorCode) {
        var queries = Queries.with(MajorEntity.class)
                .eq(MajorEntity::getMajorCode, majorCode)
                ;
        return majorMapper.selectOne(queries)
                .map(entity -> new MajorBean().from(entity));
    }

    public List<MajorBean> getListByMajorName(String majorName) {
        var queries = Queries.with(MajorEntity.class)
                .eq(MajorEntity::getMajorName, majorName)
                ;
        var list = majorMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new MajorBean().from(entity)
        );
    }

    public List<MajorBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(MajorEntity.class)
                .in(MajorEntity::getId, idList);
        var list = majorMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new MajorBean().from(entity)
        );
    }

    public List<MajorBean> getList(MajorBean query) {
        var queries = Queries.with(MajorEntity.class);
        var list = majorMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new MajorBean().from(entity)
        );
    }

    public PageResultBean<MajorBean> getPage(MajorBean query) {
        var queries = Queries.with(MajorEntity.class)
                .eq(StrUtil.isNotBlank(query.getMajorCode()), MajorEntity::getMajorCode, query.getMajorCode())
                .like(StrUtil.isNotBlank(query.getMajorName()), MajorEntity::getMajorName, query.getMajorName())
                .eq(StrUtil.isNotBlank(query.getMajorType()), MajorEntity::getMajorType, query.getMajorType())
                .eq(StrUtil.isNotBlank(query.getMajorField()), MajorEntity::getMajorField, query.getMajorField())
                .eq(StrUtil.isNotBlank(query.getGrantField()), MajorEntity::getGrantField, query.getGrantField())
                .eq(StrUtil.isNotBlank(query.getYear()), MajorEntity::getYear, query.getYear())
                .orderByDesc(MajorEntity::getId);
        var page = majorMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new MajorBean().from(entity)
        );
    }

    public long create(MajorBean major) {
        var entity = major.toEntity();
        majorMapper.insert(entity);
        major.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, MajorBean major) {
        this.getById(id).orElseThrow(() -> new BizException("专业 不存在"));
        var entity = major.toEntity();
        entity.setId(id);
        majorMapper.updateById(entity);
        return entity.getId();
    }

    public MajorBean deleteById(long id) {
        var major = this.getById(id)
                .orElseThrow(() -> new BizException("专业 不存在"));
        majorMapper.deleteById(id);
        return major;
    }

}