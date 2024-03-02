package com.example.demo.controller;

import com.example.demo.bean.LoginInfoBean;
import com.example.demo.bean.UserBean;
import com.example.demo.bean.UserCommentBean;
import com.example.demo.repository.UserCommentRepository;
import com.example.demo.repository.UserRepository;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.bean.PageResultBean;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 用户评论
 */
@RestController
@RequestMapping("/user-comment")
public class UserCommentController {

    @Autowired
    private UserCommentRepository userCommentRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public UserCommentBean getById(@PathVariable long id) {
        return userCommentRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/list")
    public List<UserCommentBean> getList(UserCommentBean query) {
        return userCommentRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<UserCommentBean> getPage(UserCommentBean query) {
        var page = userCommentRepository.getPage(query);
        return PageResultBean.from(
                page,
                this.getCommentTree(page.getList(), new HashMap<>())
        );
    }

    @PostMapping
    public long create(@RequestBody @Valid UserCommentBean param, @CurrentUser LoginInfoBean loginInfo) {
        param.setUserId(loginInfo.getId());
        return userCommentRepository.create(param);
    }

    @PutMapping("/{id}")
    public long modifyById(@PathVariable Long id, @RequestBody @Valid UserCommentBean param, @CurrentUser LoginInfoBean loginInfo) {
        param.setUserId(loginInfo.getId());
        return userCommentRepository.modifyById(id, param);
    }

    @DeleteMapping("/{id}")
    public UserCommentBean deleteById(@PathVariable Long id) {
        return userCommentRepository.deleteById(id);
    }

    private List<UserCommentBean> getCommentTree(List<UserCommentBean> list, Map<Long, UserBean> userMap) {
        for (UserCommentBean comment : list) {
            var user = userMap.computeIfAbsent(
                    comment.getUserId(),
                    userId -> userRepository.getById(userId)
                            .orElse(new UserBean())
            );
            comment.setUser(user);
            var children = userCommentRepository.getListByParentId(comment.getId());
            comment.setChildren(this.getCommentTree(children, userMap));
        }
        return list;
    }

}