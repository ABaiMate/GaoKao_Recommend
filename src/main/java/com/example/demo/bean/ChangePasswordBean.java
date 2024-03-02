package com.example.demo.bean;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 修改密码
 */
@Data
@Accessors(chain = true)
public class ChangePasswordBean {

    private String oldPassword;

    private String newPassword;

    private String newPassword2;

}