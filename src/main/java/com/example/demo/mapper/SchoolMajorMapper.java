package com.example.demo.mapper;

import com.example.demo.entity.SchoolMajorEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 学校专业
 */
@Mapper
public interface SchoolMajorMapper extends OptionalMapper<SchoolMajorEntity> {
}