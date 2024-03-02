package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.BbsBean;
import com.example.demo.entity.BbsEntity;
import com.example.demo.mapper.BbsMapper;
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
 * 论坛
 */
@Repository
public class BbsRepository {

    @Autowired
    private BbsMapper bbsMapper;

    public Optional<BbsBean> getById(long id) {
        return bbsMapper.selectById(id)
                .map(entity -> new BbsBean().from(entity));
    }

    public List<BbsBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(BbsEntity.class)
                .in(BbsEntity::getId, idList);
        var list = bbsMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new BbsBean().from(entity)
        );
    }

    public List<BbsBean> getList(BbsBean query) {
        var queries = Queries.with(BbsEntity.class);
        var list = bbsMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new BbsBean().from(entity)
        );
    }

    public PageResultBean<BbsBean> getPage(BbsBean query) {
        var queries = Queries.with(BbsEntity.class)
                .eq(Objects.nonNull(query.getUserId()), BbsEntity::getUserId, query.getUserId())
                .like(StrUtil.isNotBlank(query.getTitle()), BbsEntity::getTitle, query.getTitle())
                .orderByDesc(BbsEntity::getId);
        var page = bbsMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new BbsBean().from(entity)
        );
    }

    public long create(BbsBean bbs) {
        var entity = bbs.toEntity();
        bbsMapper.insert(entity);
        bbs.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, BbsBean bbs) {
        this.getById(id).orElseThrow(() -> new BizException("论坛 不存在"));
        var entity = bbs.toEntity();
        entity.setId(id);
        bbsMapper.updateById(entity);
        return entity.getId();
    }

    public BbsBean deleteById(long id) {
        var bbs = this.getById(id)
                .orElseThrow(() -> new BizException("论坛 不存在"));
        bbsMapper.deleteById(id);
        return bbs;
    }

}