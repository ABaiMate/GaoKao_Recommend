package com.example.demo.bean;

import com.example.demo.entity.SchoolLineEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 学校分数线
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class SchoolLineBean extends PageParam {

    /**
     * ID
     */
    private Long id;
    
    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    
    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
    
    /**
     * 学校ID
     */
    private Long schoolId;
    
    /**
     * 年份
     */
    private String year;
    
    /**
     * 科目类型
     */
    private String subjectType;
    
    /**
     * 批次
     */
    private String batch;
    
    /**
     * 分数
     */
    private Integer score;
    
    /**
     * 位次
     */
    private Integer order;
    
    public SchoolLineBean from(SchoolLineEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.schoolId = entity.getSchoolId();
        this.year = entity.getYear();
        this.subjectType = entity.getSubjectType();
        this.batch = entity.getBatch();
        this.score = entity.getScore();
        this.order = entity.getOrder();
        return this;
    }

    public SchoolLineEntity toEntity() {
        SchoolLineEntity entity = new SchoolLineEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setSchoolId(this.schoolId);
        entity.setYear(this.year);
        entity.setSubjectType(this.subjectType);
        entity.setBatch(this.batch);
        entity.setScore(this.score);
        entity.setOrder(this.order);
        return entity;
    }

}