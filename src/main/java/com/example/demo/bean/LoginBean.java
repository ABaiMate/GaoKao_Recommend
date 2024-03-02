package com.example.demo.bean;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 登录
 */
@Data
@Accessors(chain = true)
public class LoginBean {

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 验证码
     */
    private String captcha;

    /**
     * 令牌
     */
    private String token;

}
