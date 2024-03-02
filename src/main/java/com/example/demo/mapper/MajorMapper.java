package com.example.demo.mapper;

import com.example.demo.entity.MajorEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 专业
 */
@Mapper
public interface MajorMapper extends OptionalMapper<MajorEntity> {
}