package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.UserAccessHistoryBean;
import com.example.demo.repository.UserAccessHistoryRepository;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 用户访问记录
 */
@RestController
@RequestMapping("/user-access-history")
public class UserAccessHistoryController {

    @Autowired
    private UserAccessHistoryRepository userAccessHistoryRepository;

    @GetMapping("/{id}")
    public UserAccessHistoryBean getById(@PathVariable long id) {
        return userAccessHistoryRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/user-id/{userId}")
    public List<UserAccessHistoryBean> getListByUserId(@PathVariable Long userId) {
        return userAccessHistoryRepository.getListByUserId(userId);
    }

    @GetMapping("/item-id/{itemId}")
    public List<UserAccessHistoryBean> getListByItemId(@PathVariable Long itemId) {
        return userAccessHistoryRepository.getListByItemId(itemId);
    }

    @GetMapping("/list/{ids}")
    public List<UserAccessHistoryBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return userAccessHistoryRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<UserAccessHistoryBean> getList(UserAccessHistoryBean query) {
        return userAccessHistoryRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<UserAccessHistoryBean> getPage(UserAccessHistoryBean query) {
        return userAccessHistoryRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid UserAccessHistoryBean param) {
        return userAccessHistoryRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid UserAccessHistoryBean param) {
        return userAccessHistoryRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public UserAccessHistoryBean deleteById(@PathVariable Long id) {
        return userAccessHistoryRepository.deleteById(id);
    }

}