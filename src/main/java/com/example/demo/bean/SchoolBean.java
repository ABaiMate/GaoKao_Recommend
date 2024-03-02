package com.example.demo.bean;

import com.example.demo.entity.SchoolEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;

/**
 * 学校
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class SchoolBean extends PageParam {

    private Long id;
    
    private LocalDateTime createTime;
    
    private LocalDateTime updateTime;
    
    /**
     * 学校名称
     */
    private String schoolName;
    
    /**
     * 省份
     */
    private String province;
    
    /**
     * 其他信息
     */
    private Map<String, Object> info;
    
    /**
     * 简介 html
     */
    private String synopsis;
    
    /**
     * 全景地图地址
     */
    private String mapUrl;
    
    public SchoolBean from(SchoolEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.schoolName = entity.getSchoolName();
        this.province = entity.getProvince();
        this.info = entity.getInfo();
        this.synopsis = entity.getSynopsis();
        this.mapUrl = entity.getMapUrl();
        return this;
    }

    public SchoolEntity toEntity() {
        SchoolEntity entity = new SchoolEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setSchoolName(this.schoolName);
        entity.setProvince(this.province);
        entity.setInfo(this.info);
        entity.setSynopsis(this.synopsis);
        entity.setMapUrl(this.mapUrl);
        return entity;
    }

}