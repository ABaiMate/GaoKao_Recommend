package com.example.demo.mapper;

import com.example.demo.entity.SchoolLineEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 学校分数线
 */
@Mapper
public interface SchoolLineMapper extends OptionalMapper<SchoolLineEntity> {
}