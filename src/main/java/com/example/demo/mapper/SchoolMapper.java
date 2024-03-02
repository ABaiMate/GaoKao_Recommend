package com.example.demo.mapper;

import com.example.demo.entity.RecommendSchoolEntity;
import com.example.demo.entity.SchoolEntity;
import com.example.mx3.mapper.OptionalMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 学校
 */
@Mapper
public interface SchoolMapper extends OptionalMapper<SchoolEntity> {

    @Select("SELECT DISTINCT(s.id) as id, school_name, province, score, `order`, subject_type, batch, year\n" +
            "FROM school s\n" +
            "    LEFT JOIN school_line l ON s.id = l.school_id\n" +
            "WHERE year = #{year}\n" +
            "  AND `${field}` BETWEEN #{minValue} AND #{maxValue}\n" +
            "  AND subject_type = #{subjectType}\n" +
            "ORDER BY `${field}`")
    List<RecommendSchoolEntity> selectRecommendList(
            @Param("field") String field,
            @Param("subjectType") String subjectType,
            @Param("minValue") Integer minValue,
            @Param("maxValue") Integer maxValue,
            @Param("year") String year
    );

}