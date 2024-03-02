package com.example.demo.bean;

import cn.hutool.core.util.StrUtil;
import com.example.mx3.enums.RoleEnum;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * @version 1.0
 * @since 2022/11/16 16:57
 */
@Data
@Accessors(chain = true)
public class LoginInfoBean {

    /**
     * ID
     */
    private Long id;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;

    /**
     * 用户名
     */
    private String username;

    /**
     * 昵称
     */
    private String nickname;

    /**
     * 头像文件
     */
    private Long avatarFileId;

    /**
     * 角色
     */
    private String roleCode;

    /**
     * 其他信息
     */
    private Map<String, Object> info;

    /**
     * 登录时间
     */
    private LocalDateTime loginTime;

    public LoginInfoBean from(UserBean user) {
        this.id = user.getId();
        this.createTime = user.getCreateTime();
        this.updateTime = user.getUpdateTime();
        this.username = user.getUsername();
        this.nickname = user.getNickname();
        this.avatarFileId = user.getAvatarFileId();
        this.roleCode = user.getRoleCode();
        this.info = user.getInfo();
        this.loginTime = LocalDateTime.now();
        return this;
    }

    public LoginInfoBean mock() {
        this.id = 0L;
        this.createTime = LocalDateTime.now();
        this.updateTime = LocalDateTime.now();
        this.username = "1";
        this.nickname = "测试账号";
        this.avatarFileId = 1L;
        this.roleCode = "ADMIN";
        this.info = new HashMap<>();
        this.loginTime = LocalDateTime.now();
        return this;
    }

    public String getOperator() {
        return StrUtil.format("{}({})", this.nickname, this.username);
    }

    public boolean isAdmin() {
        return RoleEnum.ADMIN.name().equals(this.roleCode);
    }

    public boolean notAdmin() {
        return !this.isAdmin();
    }

    public Long getAccessUserId() {
        return this.isAdmin() ? null : this.id;
    }
}
