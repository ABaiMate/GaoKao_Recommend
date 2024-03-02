package com.example.demo.controller;

import com.example.demo.bean.CaptchaBean;
import com.example.demo.bean.LoginBean;
import com.example.demo.bean.LoginInfoBean;
import com.example.demo.bean.UserBean;
import com.example.demo.repository.UserRepository;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.component.ActiveComponent;
import com.example.mx3.constant.Constant;
import com.example.mx3.exception.BizException;
import com.example.mx3.exception.NoLoginException;

import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

/**
 * 登录
 */
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ActiveComponent activeComponent;

    @Autowired
    private HttpSession session;

    @Value("${token:}")
    private String token;

    @Value("${spring.profiles.active:dev}")
    private String env;

    @GetMapping
    public LoginInfoBean getLogin(Boolean ignore) {
        var loginInfo = (LoginInfoBean) session.getAttribute(Constant.LOGIN_INFO);
        if (!Boolean.TRUE.equals(ignore) && loginInfo == null) {
            //if (activeComponent.isProd()) {
            throw new NoLoginException();
            // }
            //return new LoginInfoBean().mock();
        }
        return loginInfo;
    }

    @GetMapping("/captcha")
    public CaptchaBean getCaptcha() {
        var captcha = new CaptchaBean()
                .init(token)
                .setEnv(env);
        session.setAttribute(Constant.CAPTCHA, captcha.getToken());
        return captcha;
    }

    @PostMapping
    public LoginInfoBean register(@RequestBody @Valid UserBean param) {
        var user = userRepository.getByUsername(param.getUsername())
                .orElse(null);
        if (user != null) {
            throw new BizException("用户已经存在");
        }
        var id = userRepository.create(param);
        user = userRepository.getById(id)
                .orElseThrow(() -> new BizException("用户不存在"));
        return new LoginInfoBean().from(user);
    }

    @PutMapping
    public LoginInfoBean login(@RequestBody LoginBean param) {
        var user = userRepository.getByUsername(param.getUsername())
                .orElseThrow(() -> new BizException("用户不存在"));
        user.checkLogin(param);
        if (activeComponent.isProd()) {
            var captchaToken = session.getAttribute(Constant.CAPTCHA);
            if (captchaToken != null && !captchaToken.equals(param.getToken())) {
                throw new BizException("验证码错误，请刷新验证码后重试");
            }
            var captcha = new CaptchaBean()
                    .setToken(param.getToken());
            captcha.verify(param.getCaptcha(), token);
            session.removeAttribute(Constant.CAPTCHA);
        }
        var loginInfo = new LoginInfoBean().from(user);
        session.setAttribute(Constant.LOGIN_INFO, loginInfo);
        return loginInfo;
    }

    @DeleteMapping
    public LoginInfoBean logout(@CurrentUser LoginInfoBean loginInfoBean) {
        session.removeAttribute(Constant.LOGIN_INFO);
        return loginInfoBean;
    }

}
