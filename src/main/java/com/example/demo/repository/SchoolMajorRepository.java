package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.SchoolMajorBean;
import com.example.demo.entity.SchoolMajorEntity;
import com.example.demo.mapper.SchoolMajorMapper;
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
 * 学校专业
 */
@Repository
public class SchoolMajorRepository {

    @Autowired
    private SchoolMajorMapper schoolMajorMapper;

    public Optional<SchoolMajorBean> getById(long id) {
        return schoolMajorMapper.selectById(id)
                .map(entity -> new SchoolMajorBean().from(entity));
    }

    public List<SchoolMajorBean> getListBySchoolIdYear(Long schoolId, String year) {
        var queries = Queries.with(SchoolMajorEntity.class)
                .eq(SchoolMajorEntity::getSchoolId, schoolId)
                .eq(SchoolMajorEntity::getYear, year)
                ;
        var list = schoolMajorMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolMajorBean().from(entity));
    }

    public List<SchoolMajorBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(SchoolMajorEntity.class)
                .in(SchoolMajorEntity::getId, idList);
        var list = schoolMajorMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolMajorBean().from(entity));
    }

    public List<SchoolMajorBean> getList(SchoolMajorBean query) {
        var queries = Queries.with(SchoolMajorEntity.class);
        var list = schoolMajorMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolMajorBean().from(entity));
    }

    public PageResultBean<SchoolMajorBean> getPage(SchoolMajorBean query) {
        var queries = Queries.with(SchoolMajorEntity.class)
                .orderByDesc(SchoolMajorEntity::getId);
        var page = schoolMajorMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(page, entity -> new SchoolMajorBean().from(entity));
    }

    public long create(SchoolMajorBean schoolMajor) {
        var entity = schoolMajor.toEntity();
        schoolMajorMapper.insert(entity);
        schoolMajor.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, SchoolMajorBean schoolMajor) {
        this.getById(id).orElseThrow(() -> new BizException("学校专业 不存在"));
        var entity = schoolMajor.toEntity();
        entity.setId(id);
        schoolMajorMapper.updateById(entity);
        return entity.getId();
    }

    public SchoolMajorBean deleteById(long id) {
        var schoolMajor = this.getById(id)
                .orElseThrow(() -> new BizException("学校专业 不存在"));
        schoolMajorMapper.deleteById(id);
        return schoolMajor;
    }

}