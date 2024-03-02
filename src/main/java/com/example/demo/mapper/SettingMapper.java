package com.example.demo.mapper;

import com.example.demo.entity.SettingEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 基本配置
 */
@Mapper
public interface SettingMapper extends OptionalMapper<SettingEntity> {
}