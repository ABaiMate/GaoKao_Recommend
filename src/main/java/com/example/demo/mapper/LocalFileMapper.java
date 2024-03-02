package com.example.demo.mapper;

import com.example.demo.entity.LocalFileEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 文件
 */
@Mapper
public interface LocalFileMapper extends OptionalMapper<LocalFileEntity> {
}