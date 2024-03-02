package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.SchoolLineBean;
import com.example.demo.entity.SchoolLineEntity;
import com.example.demo.mapper.SchoolLineMapper;
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
 * 学校分数线
 */
@Repository
public class SchoolLineRepository {

    @Autowired
    private SchoolLineMapper schoolLineMapper;

    public Optional<SchoolLineBean> getById(long id) {
        return schoolLineMapper.selectById(id)
                .map(entity -> new SchoolLineBean().from(entity));
    }

    public List<SchoolLineBean> getListBySchoolId(Long schoolId) {
        var queries = Queries.with(SchoolLineEntity.class)
                .eq(SchoolLineEntity::getSchoolId, schoolId);
        var list = schoolLineMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SchoolLineBean().from(entity)
        );
    }

    public List<SchoolLineBean> getListBySchoolIdType(Long schoolId, String type) {
        var queries = Queries.with(SchoolLineEntity.class)
                .eq(SchoolLineEntity::getSchoolId, schoolId)
                .eq(SchoolLineEntity::getSubjectType, type);
        var list = schoolLineMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SchoolLineBean().from(entity)
        );
    }

    public List<SchoolLineBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(SchoolLineEntity.class)
                .in(SchoolLineEntity::getId, idList);
        var list = schoolLineMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SchoolLineBean().from(entity)
        );
    }

    public List<SchoolLineBean> getList(SchoolLineBean query) {
        var queries = Queries.with(SchoolLineEntity.class)
                .eq(Objects.nonNull(query.getSchoolId()), SchoolLineEntity::getSchoolId, query.getSchoolId());
        var list = schoolLineMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new SchoolLineBean().from(entity)
        );
    }

    public PageResultBean<SchoolLineBean> getPage(SchoolLineBean query) {
        var queries = Queries.with(SchoolLineEntity.class)
                .eq(Objects.nonNull(query.getSchoolId()), SchoolLineEntity::getSchoolId, query.getSchoolId())
                .eq(StrUtil.isNotBlank(query.getYear()), SchoolLineEntity::getYear, query.getYear())
                .eq(StrUtil.isNotBlank(query.getSubjectType()), SchoolLineEntity::getSubjectType, query.getSubjectType())
                .eq(StrUtil.isNotBlank(query.getBatch()), SchoolLineEntity::getBatch, query.getBatch())
                .eq(Objects.nonNull(query.getScore()), SchoolLineEntity::getScore, query.getScore())
                .eq(Objects.nonNull(query.getOrder()), SchoolLineEntity::getOrder, query.getOrder())
                .orderByDesc(SchoolLineEntity::getId);
        var page = schoolLineMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new SchoolLineBean().from(entity)
        );
    }

    public long create(SchoolLineBean schoolLine) {
        var entity = schoolLine.toEntity();
        schoolLineMapper.insert(entity);
        schoolLine.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, SchoolLineBean schoolLine) {
        this.getById(id).orElseThrow(() -> new BizException("学校分数线 不存在"));
        var entity = schoolLine.toEntity();
        entity.setId(id);
        schoolLineMapper.updateById(entity);
        return entity.getId();
    }

    public SchoolLineBean deleteById(long id) {
        var schoolLine = this.getById(id)
                .orElseThrow(() -> new BizException("学校分数线 不存在"));
        schoolLineMapper.deleteById(id);
        return schoolLine;
    }

}