package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.example.mx3.mapper.OptionalModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 文件
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName(value = "local_file", autoResultMap = true)
public class LocalFileEntity extends OptionalModel<LocalFileEntity> {

    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;

    /**
     * 文件名称
     */
    private String filename;

    /**
     * 扩展名
     */
    private String ext;

    /**
     * MD5
     */
    private String md5;

    /**
     * 类型
     */
    private String type;

    /**
     * 内容
     */
    private byte[] content;

}