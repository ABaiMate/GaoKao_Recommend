package com.example.demo.mapper;

import com.example.demo.entity.UserAccessHistoryEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户访问记录
 */
@Mapper
public interface UserAccessHistoryMapper extends OptionalMapper<UserAccessHistoryEntity> {
}