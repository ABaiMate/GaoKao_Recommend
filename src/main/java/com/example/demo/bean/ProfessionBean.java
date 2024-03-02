package com.example.demo.bean;

import com.example.demo.entity.ProfessionEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * 职业
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class ProfessionBean extends PageParam {

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
     * 名称
     */
    private String name;
    
    /**
     * 标签
     */
    private String tag;
    
    /**
     * 隶属 行业
     */
    private String belong;
    
    /**
     * 相似职业
     */
    private List<String> related;
    
    /**
     * 相关的专业
     */
    private List<String> counterparts;
    
    /**
     * 内容
     */
    private String content;
    
    /**
     * 信息
     */
    private Map<String, Object> info;
    
    public ProfessionBean from(ProfessionEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.name = entity.getName();
        this.tag = entity.getTag();
        this.belong = entity.getBelong();
        this.related = entity.getRelated();
        this.counterparts = entity.getCounterparts();
        this.content = entity.getContent();
        this.info = entity.getInfo();
        return this;
    }

    public ProfessionEntity toEntity() {
        ProfessionEntity entity = new ProfessionEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setName(this.name);
        entity.setTag(this.tag);
        entity.setBelong(this.belong);
        entity.setRelated(this.related);
        entity.setCounterparts(this.counterparts);
        entity.setContent(this.content);
        entity.setInfo(this.info);
        return entity;
    }

}