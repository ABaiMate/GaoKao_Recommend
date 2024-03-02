package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.SchoolMajorBean;
import com.example.demo.repository.SchoolMajorRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 学校专业
 */
@RestController
@RequestMapping("/school-major")
public class SchoolMajorController {

    @Autowired
    private SchoolMajorRepository schoolMajorRepository;

    @GetMapping("/{id}")
    public SchoolMajorBean getById(@PathVariable long id) {
        return schoolMajorRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/school-id/year/{schoolId}/{year}")
    public List<SchoolMajorBean> getListBySchoolIdYear(@PathVariable Long schoolId, @PathVariable String year) {
        return schoolMajorRepository.getListBySchoolIdYear(schoolId, year);
    }

    @GetMapping("/list/{ids}")
    public List<SchoolMajorBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return schoolMajorRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<SchoolMajorBean> getList(SchoolMajorBean query) {
        return schoolMajorRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<SchoolMajorBean> getPage(SchoolMajorBean query) {
        return schoolMajorRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid SchoolMajorBean param) {
        return schoolMajorRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid SchoolMajorBean param) {
        return schoolMajorRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public SchoolMajorBean deleteById(@PathVariable Long id) {
        return schoolMajorRepository.deleteById(id);
    }

}