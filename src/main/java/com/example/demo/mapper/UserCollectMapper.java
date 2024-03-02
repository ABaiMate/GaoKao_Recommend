package com.example.demo.mapper;

import com.example.demo.entity.UserCollectEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户收藏
 */
@Mapper
public interface UserCollectMapper extends OptionalMapper<UserCollectEntity> {
}