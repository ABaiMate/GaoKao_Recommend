package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.example.demo.bean.ChangePasswordBean;
import com.example.demo.bean.LoginInfoBean;
import com.example.demo.bean.UserBean;
import com.example.demo.repository.UserRepository;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.exception.BizException;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 用户
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public UserBean getById(@PathVariable long id) {
        return userRepository.getById(id)
                .orElse(null);
    }

    @GetMapping("/search")
    public List<UserBean> getSearch(String keyword, String roleCodes) {
        List<String> roleCodeList = StrUtil.split(roleCodes, ",");
        return userRepository.search(keyword, roleCodeList);
    }

    @GetMapping("/list/{ids}")
    public List<UserBean> getListByIds(@PathVariable String ids) {
        var idList = ConvertUtil.from(StrUtil.split(ids, ","), Long::valueOf);
        return userRepository.getListByIdList(idList);
    }

    @GetMapping("/list")
    public List<UserBean> getList(UserBean query) {
        return userRepository.getList(query);
    }

    @GetMapping("/page")
    public PageResultBean<UserBean> getPage(UserBean query) {
        return userRepository.getPage(query);
    }

    @PostMapping
    public long create(@RequestBody @Valid UserBean param) {
        return userRepository.create(param);
    }

    @PutMapping("/{id}")
    public Long modify(@PathVariable Long id, @RequestBody @Valid UserBean param) {
        return userRepository.modifyById(id, param);
    }

    @PutMapping("/change-password")
    public LoginInfoBean changePassword(@CurrentUser LoginInfoBean loginInfo, @RequestBody ChangePasswordBean param) {
        if (!param.getNewPassword().equals(param.getNewPassword2())) {
            throw new BizException("两次密码不一致");
        }
        var user = userRepository.getById(loginInfo.getId())
                .orElseThrow(() -> new BizException("用户不存在"));
        if (!user.getPassword().equals(param.getOldPassword())) {
            throw new BizException("原密码错误");
        }
        user.setPassword(param.getNewPassword());
        userRepository.modifyById(loginInfo.getId(), user);
        return loginInfo;
    }

    @DeleteMapping("/{id}")
    public UserBean deleteById(@PathVariable Long id) {
        return userRepository.deleteById(id);
    }

}
