package com.example.demo.bean;

import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.digest.DigestUtil;
import cn.hutool.http.HttpUtil;
import com.example.demo.entity.LocalFileEntity;
import com.example.mx3.bean.PageParam;
import com.example.mx3.exception.BizException;
import com.example.mx3.utils.SpringUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import lombok.var;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

/**
 * 文件
 */
@Slf4j
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class LocalFileBean extends PageParam {

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
    private LocalFileTypeEnum type;

    /**
     * 内容
     */
    private byte[] content;

    @AllArgsConstructor
    public enum LocalFileTypeEnum {
        DB, SYSTEM, NET,
    }

    public LocalFileBean from(LocalFileEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.filename = entity.getFilename();
        this.ext = entity.getExt();
        this.md5 = entity.getMd5();
        this.type = LocalFileTypeEnum.valueOf(entity.getType());
        this.content = entity.getContent();
        return this;
    }

    public LocalFileBean from(MultipartFile file, LocalFileTypeEnum type) {
        try {
            return this.from(
                    file.getOriginalFilename(),
                    file.getBytes(),
                    type
            );
        } catch (IOException e) {
            log.error("文件读取失败>> ", e);
            throw new BizException("文件读取失败");
        }
    }

    public LocalFileBean from(String filename, byte[] bs, LocalFileTypeEnum type) {
        this.filename = filename;
        if (this.filename == null) {
            throw new BizException("文件格式不符");
        }
        this.ext = this.filename.substring(this.filename.lastIndexOf(".") + 1);
        this.md5 = DigestUtil.md5Hex(bs);
        this.type = type;
        if (LocalFileTypeEnum.DB.equals(type)) {
            this.content = bs;
        } else {
            String filepath = SpringUtil.getProperty("local-file.path");
            Path path;
            if (StrUtil.isBlank(filepath)) {
                path = Paths.get(System.getProperty("user.dir"));
                path = path.getParent();
            } else {
                path = Paths.get(filepath);
            }
            path = Paths.get(path.toString(), "file", this.md5.substring(0, 2).toLowerCase());
            try {
                if (Files.notExists(path)) {
                    Files.createDirectories(path);
                }
                path = Paths.get(path.toString(), System.currentTimeMillis() + "_" + this.filename);
                Files.write(path, bs);
                this.content = path.toString().getBytes(StandardCharsets.UTF_8);
            } catch (IOException e) {
                log.error("文件写入失败>> ", e);
                throw new BizException("文件写入失败");
            }
        }
        return this;
    }

    public LocalFileEntity toEntity() {
        LocalFileEntity entity = new LocalFileEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setFilename(this.filename);
        entity.setExt(this.ext);
        entity.setMd5(this.md5);
        entity.setType(this.type.name());
        entity.setContent(this.content);
        return entity;
    }

    public ByteArrayInputStream buildBis() throws IOException {
        if (LocalFileTypeEnum.DB.equals(this.type)) {
            return new ByteArrayInputStream(this.content);
        }
        if (LocalFileTypeEnum.NET.equals(this.type)) {
            var bs = HttpUtil.downloadBytes(new String(this.content, Charset.defaultCharset()));
            return new ByteArrayInputStream(bs);
        }
        var path = Paths.get(new String(this.content, StandardCharsets.UTF_8));
        var bs = Files.readAllBytes(path);
        return new ByteArrayInputStream(bs);
    }

    public String buildImgContentType() {
        if ("jpg".equals(ext)) {
            return "image/" + "jpeg";
        }
        return "image/" + ext;
    }

    public String buildContentType() {
        return ext;
    }
}