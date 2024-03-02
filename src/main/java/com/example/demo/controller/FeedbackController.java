package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.FeedbackBean;
import com.example.demo.bean.LoginInfoBean;
import com.example.demo.repository.FeedbackRepository;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 反馈
 */
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @GetMapping("/{id}")
    public FeedbackBean getById(@PathVariable long id) {
        return feedbackRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/user-id/{userId}")
    public List<FeedbackBean> getListByUserId(@PathVariable Long userId) {
        return feedbackRepository.getListByUserId(userId);
    }

    @GetMapping("/list/{ids}")
    public List<FeedbackBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return feedbackRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<FeedbackBean> getList(FeedbackBean query) {
        return feedbackRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<FeedbackBean> getPage(FeedbackBean query) {
        return feedbackRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid FeedbackBean param, @CurrentUser LoginInfoBean loginInfo) {
        param.setUserId(loginInfo.getId());
        return feedbackRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable long id, @RequestBody @Valid FeedbackBean param) {
        return feedbackRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public FeedbackBean deleteById(@PathVariable Long id) {
        return feedbackRepository.deleteById(id);
    }

}