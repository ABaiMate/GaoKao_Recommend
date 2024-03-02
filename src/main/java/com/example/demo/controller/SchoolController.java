package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.demo.bean.SchoolBean;
import com.example.demo.entity.SchoolEntity;
import com.example.demo.repository.SchoolRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * 学校
 */
@RestController
@RequestMapping("/school")
public class SchoolController {

    @Autowired
    private SchoolRepository schoolRepository;

    @GetMapping("/{id}")
    public SchoolBean getById(@PathVariable long id) {
        return schoolRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/school-name/{schoolName}")
    public List<SchoolBean> getListBySchoolName(@PathVariable String schoolName) {
        return schoolRepository.getListBySchoolName(schoolName);
    }

    @GetMapping("/list/{ids}")
    public List<SchoolBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return schoolRepository.getListByIdList(idList);
    }

    @GetMapping("/province/list")
    public List<String> getProvinceList() {
        return schoolRepository.getProvinceList();
    }

    @GetMapping("/list")
    public List<SchoolBean> getList(SchoolBean query) {
        return schoolRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<SchoolBean> getPage(SchoolBean query) {
        return schoolRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid SchoolBean param) {
        return schoolRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid SchoolBean param) {
        return schoolRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public SchoolBean deleteById(@PathVariable Long id) {
        return schoolRepository.deleteById(id);
    }

}