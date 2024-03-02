package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.SettingBean;
import com.example.demo.repository.SettingRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 基本配置
 */
@RestController
@RequestMapping("/setting")
public class SettingController {

    @Autowired
    private SettingRepository settingRepository;

    @GetMapping("/{id}")
    public SettingBean getById(@PathVariable long id) {
        return settingRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/list/{ids}")
    public List<SettingBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return settingRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<SettingBean> getList(SettingBean query) {
        return settingRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<SettingBean> getPage(SettingBean query) {
        return settingRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid SettingBean param) {
        return settingRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid SettingBean param) {
        return settingRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public SettingBean deleteById(@PathVariable Long id) {
        return settingRepository.deleteById(id);
    }

}