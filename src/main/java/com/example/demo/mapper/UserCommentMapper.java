package com.example.demo.mapper;

import com.example.demo.entity.UserCommentEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户评论
 */
@Mapper
public interface UserCommentMapper extends OptionalMapper<UserCommentEntity> {
}