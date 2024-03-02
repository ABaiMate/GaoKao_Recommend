package com.example.demo.bean;

import com.example.demo.entity.SchoolMajorEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;

/**
 * 学校专业
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class SchoolMajorBean extends PageParam {

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
     * 学校
     */
    private Long schoolId;
    
    /**
     * 文理
     */
    private String type;
    
    /**
     * 年份
     */
    private String year;
    
    /**
     * 重点学科
     */
    private String focusMajor;
    
    /**
     * 特色学科
     */
    private String specialMajor;
    
    /**
     * 国家重点实验室
     */
    private String labMajor;
    
    /**
     * 一流学科
     */
    private String courseMajor;
    
    /**
     * 备用信息
     */
    private Map<String, Object> info;
    
    public SchoolMajorBean from(SchoolMajorEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.schoolId = entity.getSchoolId();
        this.type = entity.getType();
        this.year = entity.getYear();
        this.focusMajor = entity.getFocusMajor();
        this.specialMajor = entity.getSpecialMajor();
        this.labMajor = entity.getLabMajor();
        this.courseMajor = entity.getCourseMajor();
        this.info = entity.getInfo();
        return this;
    }

    public SchoolMajorEntity toEntity() {
        SchoolMajorEntity entity = new SchoolMajorEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setSchoolId(this.schoolId);
        entity.setType(this.type);
        entity.setYear(this.year);
        entity.setFocusMajor(this.focusMajor);
        entity.setSpecialMajor(this.specialMajor);
        entity.setLabMajor(this.labMajor);
        entity.setCourseMajor(this.courseMajor);
        entity.setInfo(this.info);
        return entity;
    }

}