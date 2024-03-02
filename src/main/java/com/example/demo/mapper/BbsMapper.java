package com.example.demo.mapper;

import com.example.demo.entity.BbsEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 论坛
 */
@Mapper
public interface BbsMapper extends OptionalMapper<BbsEntity> {
}