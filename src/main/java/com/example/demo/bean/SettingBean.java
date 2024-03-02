package com.example.demo.bean;

import com.example.demo.entity.SettingEntity;
import com.example.mx3.bean.PageParam;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 基本配置
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class SettingBean extends PageParam {

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
     * KEY
     */
    private String key;
    
    /**
     * VALUE
     */
    private String value;
    
    public SettingBean from(SettingEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.key = entity.getKey();
        this.value = entity.getValue();
        return this;
    }

    public SettingEntity toEntity() {
        SettingEntity entity = new SettingEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setKey(this.key);
        entity.setValue(this.value);
        return entity;
    }

}