package com.example.demo.mapper;

import com.example.demo.entity.FeedbackEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 反馈
 */
@Mapper
public interface FeedbackMapper extends OptionalMapper<FeedbackEntity> {
}