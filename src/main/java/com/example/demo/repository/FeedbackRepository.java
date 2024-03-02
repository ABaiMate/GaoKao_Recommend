package com.example.demo.repository;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.FeedbackBean;
import com.example.demo.entity.FeedbackEntity;
import com.example.demo.mapper.FeedbackMapper;
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
 * 反馈
 */
@Repository
public class FeedbackRepository {

    @Autowired
    private FeedbackMapper feedbackMapper;

    public Optional<FeedbackBean> getById(long id) {
        return feedbackMapper.selectById(id)
                .map(entity -> new FeedbackBean().from(entity));
    }

    public List<FeedbackBean> getListByUserId(Long userId) {
        var queries = Queries.with(FeedbackEntity.class)
                .eq(FeedbackEntity::getUserId, userId)
                ;
        var list = feedbackMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new FeedbackBean().from(entity));
    }

    public List<FeedbackBean> getListByIdList(List<Long> idList) {
        if (CollUtil.isEmpty(idList)) {
            return Collections.emptyList();
        }
        var queries = Queries.with(FeedbackEntity.class)
                .in(FeedbackEntity::getId, idList);
        var list = feedbackMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new FeedbackBean().from(entity));
    }

    public List<FeedbackBean> getList(FeedbackBean query) {
        var queries = Queries.with(FeedbackEntity.class);
        var list = feedbackMapper.selectList(queries);
        return ConvertUtil.from(list, entity -> new FeedbackBean().from(entity));
    }

    public PageResultBean<FeedbackBean> getPage(FeedbackBean query) {
        var queries = Queries.with(FeedbackEntity.class)
                .orderByDesc(FeedbackEntity::getId);
        var page = feedbackMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(page, entity -> new FeedbackBean().from(entity));
    }

    public long create(FeedbackBean feedback) {
        var entity = feedback.toEntity();
        feedbackMapper.insert(entity);
        feedback.setId(entity.getId());
        return entity.getId();
    }

    public long modifyById(long id, FeedbackBean feedback) {
        this.getById(id).orElseThrow(() -> new BizException("反馈 不存在"));
        var entity = feedback.toEntity();
        entity.setId(id);
        feedbackMapper.updateById(entity);
        return entity.getId();
    }

    public FeedbackBean deleteById(long id) {
        var feedback = this.getById(id)
                .orElseThrow(() -> new BizException("反馈 不存在"));
        feedbackMapper.deleteById(id);
        return feedback;
    }

}