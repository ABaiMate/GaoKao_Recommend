package com.example.demo.repository;

import com.example.demo.bean.LocalFileBean;
import com.example.demo.entity.LocalFileEntity;
import com.example.demo.mapper.LocalFileMapper;
import com.example.mx3.bean.PageResultBean;
import com.example.mx3.exception.BizException;
import com.example.mx3.mybatis.Queries;
import com.example.mx3.utils.ConvertUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 文件
 */
@Repository
public class LocalFileRepository {

    @Autowired
    private LocalFileMapper localFileMapper;

    public Optional<LocalFileBean> getById(long id) {
        return localFileMapper.selectById(id)
                .map(entity -> new LocalFileBean().from(entity));
    }

    public Optional<LocalFileBean> getByMd5(String md5) {
        var queries = Queries.with(LocalFileEntity.class);
        queries.eq(LocalFileEntity::getMd5, md5);
        return localFileMapper.selectOne(queries)
                .map(entity -> new LocalFileBean().from(entity));
    }

    public List<LocalFileBean> getList(LocalFileBean query) {
        var queries = Queries.with(LocalFileEntity.class);
        var list = localFileMapper.selectList(queries);
        return ConvertUtil.from(
                list,
                entity -> new LocalFileBean().from(entity)
        );
    }

    public PageResultBean<LocalFileBean> getPage(LocalFileBean query) {
        var queries = Queries.with(LocalFileEntity.class);
        var page = localFileMapper.selectPage(query.toPage(), queries);
        return PageResultBean.from(
                page,
                entity -> new LocalFileBean().from(entity)
        );
    }

    public long create(LocalFileBean localFile) {
        var entity = localFile.toEntity();
        localFileMapper.insert(entity);
        return entity.getId();
    }

    public long modifyById(long id, LocalFileBean localFile) {
        this.getById(id).orElseThrow(() -> new BizException("文件 不存在"));
        var entity = localFile.toEntity();
        entity.setId(id);
        localFileMapper.updateById(entity);
        return entity.getId();
    }

    public LocalFileBean delete(long id) {
        var localFile = this.getById(id)
                .orElseThrow(() -> new BizException("文件 不存在"));
        localFileMapper.deleteById(id);
        return localFile;
    }

}