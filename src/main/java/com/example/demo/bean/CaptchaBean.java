package com.example.demo.bean;

import cn.hutool.captcha.AbstractCaptcha;
import cn.hutool.captcha.CaptchaUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.digest.DigestUtil;
import com.example.mx3.exception.BizException;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 验证码
 */
@Data
@Accessors(chain = true)
public class CaptchaBean {

    /**
     * 图片
     */
    private String base64;

    /**
     * 令牌
     */
    private String token;

    /**
     * 环境
     */
    private String env;

    public CaptchaBean init(String salt) {
        AbstractCaptcha captcha = CaptchaUtil.createLineCaptcha(80, 40, 4, 1);
        this.base64 = captcha.getImageBase64();
        this.token = DigestUtil.md5Hex(captcha.getCode().toUpperCase() + salt);
        return this;
    }

    public void verify(String captcha, String salt) {
        if (StrUtil.isBlank(captcha) || !DigestUtil.md5Hex(captcha.toUpperCase() + salt).equals(this.token)) {
            throw new BizException("验证码错误");
        }
    }
}
