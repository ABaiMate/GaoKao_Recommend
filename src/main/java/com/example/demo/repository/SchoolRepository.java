package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.SchoolBean;
import com.example.demo.entity.SchoolEntity;
import com.example.demo.mapper.SchoolMapper;
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
 * 学校
 */
@Repository
public class SchoolRepository {

    @Autowired
    private SchoolMapper schoolMapper;

    public Optional<SchoolBean> getById(long id) {
        return schoolMapper.selectById(id)
                .map(entity -> new SchoolBean().from(entity));
    }

    public List<SchoolBean> getListBySchoolName(String schoolName) {
        var queries = Queries.with(SchoolEntity.class)
                .eq(SchoolEntity::getSchoolName, schoolName);
        var list = schoolMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolBean().from(entity));
    }

    public List<SchoolBean> getListByProvince(String province) {
        var queries = Queries.with(SchoolEntity.class)
                .eq(SchoolEntity::getProvince, province);
        var list = schoolMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolBean().from(entity));
    }

    public List<String> getProvinceList() {
        var queries = Queries.with(SchoolEntity.class)
                .select(SchoolEntity::getProvince)
                .isNotNull(SchoolEntity::getProvince)
                .groupBy(SchoolEntity::getProvince);
        var list = schoolMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                SchoolEntity::getProvince
        );
    }


    public List<SchoolBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(SchoolEntity.class)
                .in(SchoolEntity::getId, idList);
        var list = schoolMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolBean().from(entity));
    }

    public List<SchoolBean> getList(SchoolBean query) {
        var queries = Queries.with(SchoolEntity.class);
        var list = schoolMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new SchoolBean().from(entity));
    }

    public PageResultBean<SchoolBean> getPage(SchoolBean query) {
        var queries = Queries.with(SchoolEntity.class)
                .like(StrUtil.isNotBlank(query.getSchoolName()), SchoolEntity::getSchoolName, query.getSchoolName())
                .eq(StrUtil.isNotBlank(query.getProvince()), SchoolEntity::getProvince, query.getProvince())
                .orderByAsc(SchoolEntity::getId);
        var page = schoolMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(page, entity -> new SchoolBean().from(entity));
    }

    public long create(SchoolBean school) {
        var entity = school.toEntity();
        schoolMapper.insert(entity);
        school.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, SchoolBean school) {
        this.getById(id).orElseThrow(() -> new BizException("学校 不存在"));
        var entity = school.toEntity();
        entity.setId(id);
        schoolMapper.updateById(entity);
        return entity.getId();
    }

    public SchoolBean deleteById(long id) {
        var school = this.getById(id)
                .orElseThrow(() -> new BizException("学校 不存在"));
        schoolMapper.deleteById(id);
        return school;
    }

}