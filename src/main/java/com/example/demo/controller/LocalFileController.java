package com.example.demo.controller;

import cn.hutool.core.io.FileUtil;
import cn.hutool.crypto.digest.DigestUtil;
import cn.hutool.extra.servlet.ServletUtil;
import com.example.demo.bean.LocalFileBean;
import com.example.demo.repository.LocalFileRepository;
import com.example.mx3.exception.BizException;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * 文件
 */
@RestController
@RequestMapping("/local-file")
public class LocalFileController {

    @Autowired
    private LocalFileRepository localFileRepository;

    @Value("${local-file.type:DB}")
    public String localFileType;

    @GetMapping("/{id}")
    public LocalFileBean getById(@PathVariable long id) {
        return localFileRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/img/{id}")
    public void getImgById(@PathVariable long id, HttpServletResponse response) throws IOException {
        var localFile = localFileRepository.getById(id)
                .orElseThrow(() -> new BizException("文件不存在"));
        ServletUtil.write(response, localFile.buildBis(), localFile.buildImgContentType());
    }

    @GetMapping("/download/{id}")
    public void download(@PathVariable long id, HttpServletResponse response) throws IOException {
        var localFile = localFileRepository.getById(id)
                .orElseThrow(() -> new BizException("文件不存在"));
        response.setCharacterEncoding("UTF-8");
        ServletUtil.write(response, localFile.buildBis(), FileUtil.getMimeType(localFile.getFilename()), localFile.getFilename());
    }

    @PostMapping("/upload")
    public Long upload(@RequestPart(value = "file") MultipartFile file) {
        String md5;
        try {
            md5 = DigestUtil.md5Hex(file.getBytes());
        } catch (IOException e) {
            throw new BizException("文件读取失败");
        }
        var localFile = localFileRepository.getByMd5(md5)
                .orElse(null);
        if (localFile != null) {
            return localFile.getId();
        }
        localFile = new LocalFileBean()
                .from(file, LocalFileBean.LocalFileTypeEnum.valueOf(localFileType));
        return localFileRepository.create(localFile);
    }

    @PostMapping("/upload/files")
    public List<Long> upload(@RequestPart List<MultipartFile> files) {
        return ConvertUtil.fromParallel(files, this::upload);
    }

    @DeleteMapping("/{id}")
    public LocalFileBean delete(@PathVariable Long id) {
        return localFileRepository.delete(id);
    }

}