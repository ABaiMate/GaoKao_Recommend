package com.example.demo.mapper;

import com.example.demo.entity.ProfessionEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 职业
 */
@Mapper
public interface ProfessionMapper extends OptionalMapper<ProfessionEntity> {
}