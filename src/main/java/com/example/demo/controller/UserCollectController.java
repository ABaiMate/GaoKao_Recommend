package com.example.demo.controller;

import com.example.demo.bean.LoginInfoBean;
import com.example.demo.bean.UserCollectBean;
import com.example.demo.repository.UserCollectRepository;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.bean.PageResultBean;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 用户收藏
 */
@Slf4j
@RestController
@RequestMapping("/user-collect")
public class UserCollectController {

    @Autowired
    private UserCollectRepository userCollectRepository;

    @GetMapping("/{id}")
    public UserCollectBean getById(@PathVariable long id) {
        return userCollectRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/{targetType}/{targetId}")
    public UserCollectBean getByTargetId(@PathVariable String targetType,
                                         @PathVariable long targetId,
                                         @CurrentUser LoginInfoBean loginInfo) {
        return userCollectRepository.getByTargetId(loginInfo.getId(), targetType, targetId)
                .orElse(null);
    }

    @GetMapping("/list")
    public List<UserCollectBean> getList(UserCollectBean query, @CurrentUser LoginInfoBean loginInfo) {
        query.setUserId(loginInfo.getId());
        return userCollectRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<UserCollectBean> getPage(UserCollectBean query, @CurrentUser LoginInfoBean loginInfo) {
        query.setUserId(loginInfo.getId());
        return userCollectRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid UserCollectBean param, @CurrentUser LoginInfoBean loginInfo) {
        if ("COURSE_ITEM".equals(param.getTargetType())) {
            log.info("收藏内容>> userId:{}, itemId:{}", loginInfo.getId(), param.getTargetId());
        }
        param.setUserId(loginInfo.getId());
        return userCollectRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable Long id, @RequestBody @Valid UserCollectBean param, @CurrentUser LoginInfoBean loginInfo) {
        param.setUserId(loginInfo.getId());
        return userCollectRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public UserCollectBean deleteById(@PathVariable Long id) {
        return userCollectRepository.deleteById(id);
    }

}