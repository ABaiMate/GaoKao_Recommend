package com.example.demo.controller;

import cn.hutool.core.lang.Pair;
import com.example.demo.bean.LoginInfoBean;
import com.example.demo.bean.RecommendSchoolBean;
import com.example.demo.component.GM;
import com.example.demo.entity.RecommendSchoolEntity;
import com.example.demo.entity.SchoolLineEntity;
import com.example.demo.mapper.SchoolLineMapper;
import com.example.demo.mapper.SchoolMapper;
import com.example.demo.mapper.UserMapper;
import com.example.mx3.annotation.CurrentUser;
import com.example.mx3.mybatis.Queries;
import lombok.RequiredArgsConstructor;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequestMapping("recommend")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class RecommendController {

    @Autowired
    private SchoolMapper schoolMapper;

    @Autowired
    private SchoolLineMapper schoolLineMapper;

    @GetMapping("/list")
    public List<RecommendSchoolBean> getList(String type,
                                             String field,
                                             String subjectType,
                                             Integer score,
                                             Integer order) {
        var pair = this.getValue(type, field, score, order);
        var list = schoolMapper.selectRecommendList(
                field,
                subjectType,
                pair.getKey(),
                pair.getValue(),
                "2022"
        );

        List<RecommendSchoolBean> recommendList = new ArrayList<>();
        for (RecommendSchoolEntity entity : list) {

            RecommendSchoolBean bean = new RecommendSchoolBean();
            bean.setId(entity.getId());
            bean.setSchoolName(entity.getSchoolName());
            bean.setProvince(entity.getProvince());
            bean.setBatch(entity.getBatch());

            var lineList = schoolLineMapper.selectList(
                    Queries.with(SchoolLineEntity.class)
                            .eq(SchoolLineEntity::getSchoolId, entity.getId())
                            .eq(SchoolLineEntity::getSubjectType, subjectType)
            );
            var lineMap = lineList.stream()
                    .collect(Collectors.toMap(
                            SchoolLineEntity::getYear,
                            Function.identity(),
                            (o1, o2) -> o2
                    ));
            double[] sds = lineList.stream()
                    .map(SchoolLineEntity::getScore)
                    .mapToDouble(Double::valueOf)
                    .toArray();
            double[] rds = lineList.stream()
                    .map(SchoolLineEntity::getOrder)
                    .mapToDouble(Double::valueOf)
                    .toArray();
            Map<String, Integer> scoreMap = new HashMap<>();
            scoreMap.put("2020",
                    Optional.ofNullable(lineMap.get("2020"))
                            .map(SchoolLineEntity::getScore)
                            .orElse(null)
            );
            scoreMap.put("2021",
                    Optional.ofNullable(lineMap.get("2021"))
                            .map(SchoolLineEntity::getScore)
                            .orElse(null)
            );
            scoreMap.put("2022", entity.getScore());
            scoreMap.put("GM", (int) GM.gm(sds, 3));
            bean.setScoreMap(scoreMap);

            Map<String, Integer> orderMap = new HashMap<>();
            orderMap.put("2020", Optional.ofNullable(lineMap.get("2020"))
                    .map(SchoolLineEntity::getOrder)
                    .orElse(null));
            orderMap.put("2021", Optional.ofNullable(lineMap.get("2021"))
                    .map(SchoolLineEntity::getOrder)
                    .orElse(null));
            orderMap.put("2022", entity.getOrder());
            orderMap.put("GM", (int) GM.gm(rds, 3));
            bean.setOrderMap(orderMap);

            recommendList.add(bean);
        }

        return recommendList;
    }

    public Pair<Integer, Integer> getValue(String type, String field, Integer score, Integer order) {
        int value, level;
        if ("score".equals(field)) {
            value = score;
            level = 20;
        } else {
            value = order;
            level = 10;
        }
        switch (type) {
            case "冲":
                return new Pair<>(value + level, value + level * 2);
            case "保":
                return new Pair<>(value - level * 2, value - level);
            default:
                return new Pair<>(value - level, value + level);
        }
    }
}
