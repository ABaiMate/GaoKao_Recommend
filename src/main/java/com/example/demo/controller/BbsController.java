package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.BbsBean;
import com.example.demo.bean.LoginInfoBean;
import com.example.demo.repository.BbsRepository;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 论坛
 */
@RestController
@RequestMapping("/bbs")
public class BbsController {

    @Autowired
    private BbsRepository bbsRepository;

    @GetMapping("/{id}")
    public BbsBean getById(@PathVariable long id) {
        return bbsRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/list/{ids}")
    public List<BbsBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return bbsRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<BbsBean> getList(BbsBean query) {
        return bbsRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<BbsBean> getPage(BbsBean query) {
        return bbsRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid BbsBean param, @CurrentUser LoginInfoBean loginInfo) {
        param.setUserId(loginInfo.getId());
        return bbsRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid BbsBean param) {
        return bbsRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public BbsBean deleteById(@PathVariable Long id) {
        return bbsRepository.deleteById(id);
    }

}