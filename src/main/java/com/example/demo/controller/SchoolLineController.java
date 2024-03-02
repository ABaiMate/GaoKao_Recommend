package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.demo.bean.SchoolLineBean;
import com.example.demo.component.GM;
import com.example.demo.entity.SchoolLineEntity;
import com.example.demo.repository.SchoolLineRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 学校分数线
 */
@RestController
@RequestMapping("/school-line")
public class SchoolLineController {

    @Autowired
    private SchoolLineRepository schoolLineRepository;

    @GetMapping("/{id}")
    public SchoolLineBean getById(@PathVariable long id) {
        return schoolLineRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/school-id/{schoolId}")
    public List<SchoolLineBean> getListBySchoolId(@PathVariable Long schoolId) {
        return schoolLineRepository.getListBySchoolId(schoolId);
    }

    @GetMapping("/{schoolId}/{type}")
    public Integer getGm(@PathVariable long schoolId, @PathVariable String type) {
        var list = schoolLineRepository.getListBySchoolIdType(schoolId, type);
        if (list.isEmpty()) {
            return 0;
        }
        double[] ds = new double[list.size()];
        for (int i = 0; i < list.size(); i++) {
            ds[i] = list.get(i).getScore();
        }
        return (int) GM.gm(ds, 3);
    }

    @GetMapping("/list/{ids}")
    public List<SchoolLineBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return schoolLineRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<SchoolLineBean> getList(SchoolLineBean query) {
        return schoolLineRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<SchoolLineBean> getPage(SchoolLineBean query) {
        return schoolLineRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid SchoolLineBean param) {
        return schoolLineRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid SchoolLineBean param) {
        return schoolLineRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public SchoolLineBean deleteById(@PathVariable Long id) {
        return schoolLineRepository.deleteById(id);
    }

}