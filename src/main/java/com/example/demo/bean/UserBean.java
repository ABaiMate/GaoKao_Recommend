package com.example.demo.bean;

import com.example.demo.entity.UserEntity;
import com.example.mx3.bean.PageParam;
import com.example.mx3.exception.BizException;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;
import java.util.Map;

/**
 * 用户
 */
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class UserBean extends PageParam {

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
     * 密码
     */
    private String password;

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

    public UserBean from(UserEntity entity) {
        this.id = entity.getId();
        this.createTime = entity.getCreateTime();
        this.updateTime = entity.getUpdateTime();
        this.username = entity.getUsername();
        this.password = entity.getPassword();
        this.nickname = entity.getNickname();
        this.avatarFileId = entity.getAvatarFileId();
        this.roleCode = entity.getRoleCode();
        this.info = entity.getInfo();
        return this;
    }

    public UserEntity toEntity() {
        UserEntity entity = new UserEntity();
        entity.setId(this.id);
        entity.setCreateTime(this.createTime);
        entity.setUpdateTime(this.updateTime);
        entity.setUsername(this.username);
        entity.setPassword(this.password);
        entity.setNickname(this.nickname);
        entity.setAvatarFileId(this.avatarFileId);
        entity.setRoleCode(this.roleCode);
        entity.setInfo(this.info);
        return entity;
    }

    public void checkLogin(LoginBean login) {
        if (!this.password.equals(login.getPassword())) {
            throw new BizException("密码错误");
        }
    }
}
