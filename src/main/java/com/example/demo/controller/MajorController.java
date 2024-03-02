package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.MajorBean;
import com.example.demo.repository.MajorRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 专业
 */
@RestController
@RequestMapping("/major")
public class MajorController {

    @Autowired
    private MajorRepository majorRepository;

    @GetMapping("/{id}")
    public MajorBean getById(@PathVariable long id) {
        return majorRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/major-code/{majorCode}")
    public MajorBean getByMajorCode(@PathVariable String majorCode) {
        return majorRepository.getByMajorCode(majorCode)
                .orElse(null);
    }

    @GetMapping("/major-name/{majorName}")
    public List<MajorBean> getListByMajorName(@PathVariable String majorName) {
        return majorRepository.getListByMajorName(majorName);
    }

    @GetMapping("/list/{ids}")
    public List<MajorBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return majorRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<MajorBean> getList(MajorBean query) {
        return majorRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<MajorBean> getPage(MajorBean query) {
        return majorRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid MajorBean param) {
        return majorRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid MajorBean param) {
        return majorRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public MajorBean deleteById(@PathVariable Long id) {
        return majorRepository.deleteById(id);
    }

}