package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.ProfessionBean;
import com.example.demo.repository.ProfessionRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import com.example.mx3.utils.GroupByUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * 职业
 */
@RestController
@RequestMapping("/profession")
public class ProfessionController {

    @Autowired
    private ProfessionRepository professionRepository;

    @GetMapping("/{id}")
    public ProfessionBean getById(@PathVariable long id) {
        return professionRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/list/{ids}")
    public List<ProfessionBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return professionRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<ProfessionBean> getList(ProfessionBean query) {
        return professionRepository.getList(query);
    }

    @GetMapping("/group-by/list")
    public Map<String, List<Object>> getGroupByList(String types) {
        return GroupByUtil.getMap(
                professionRepository.getProfessionMapper(),
                types.split(",")
        );
    }

    @GetMapping("/page")
    public PageResultBean<ProfessionBean> getPage(ProfessionBean query) {
        return professionRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid ProfessionBean param) {
        return professionRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid ProfessionBean param) {
        return professionRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public ProfessionBean deleteById(@PathVariable Long id) {
        return professionRepository.deleteById(id);
    }

}