package com.example.demo.bean;

import com.example.demo.entity.MajorEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 专业
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class MajorBean extends PageParam {

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
     * 专业代码
     */
    private String majorCode;
    
    /**
     * 专业名称
     */
    private String majorName;
    
    /**
     * 专业类型
     */
    private String majorType;
    
    /**
     * 专业门类
     */
    private String majorField;
    
    /**
     * 授予门类
     */
    private String grantField;
    
    /**
     * 修业年限
     */
    private String year;
    
    public MajorBean from(MajorEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.majorCode = entity.getMajorCode();
        this.majorName = entity.getMajorName();
        this.majorType = entity.getMajorType();
        this.majorField = entity.getMajorField();
        this.grantField = entity.getGrantField();
        this.year = entity.getYear();
        return this;
    }

    public MajorEntity toEntity() {
        MajorEntity entity = new MajorEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setMajorCode(this.majorCode);
        entity.setMajorName(this.majorName);
        entity.setMajorType(this.majorType);
        entity.setMajorField(this.majorField);
        entity.setGrantField(this.grantField);
        entity.setYear(this.year);
        return entity;
    }

}