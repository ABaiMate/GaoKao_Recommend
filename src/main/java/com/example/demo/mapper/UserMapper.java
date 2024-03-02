package com.example.demo.mapper;

import com.example.demo.entity.UserEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户
 */
@Mapper
public interface UserMapper extends OptionalMapper<UserEntity> {
}