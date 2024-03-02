package com.example.demo.controller;

import com.example.demo.bean.ChartBean;
import com.example.demo.bean.SchoolBean;
import com.example.demo.bean.SchoolLineBean;
import com.example.demo.entity.SchoolEntity;
import com.example.demo.entity.SchoolLineEntity;
import com.example.demo.mapper.SchoolLineMapper;
import com.example.demo.mapper.SchoolMapper;
import com.example.demo.repository.SchoolLineRepository;
import com.example.demo.repository.SchoolRepository;
import com.example.mx3.mybatis.Queries;
import com.example.mx3.utils.ConvertUtil;
import com.example.mx3.utils.GroupByUtil;
import lombok.RequiredArgsConstructor;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("data/map")
public class DataMapController {

    @Autowired
    private SchoolMapper schoolMapper;

    @Autowired
    private SchoolLineMapper schoolLineMapper;

    @Autowired
    private SchoolRepository schoolRepository;

    @Autowired
    private SchoolLineRepository schoolLineRepository;


    @GetMapping("/province")
    public ChartBean getProvince() {
        var provinceList = ConvertUtil.from(
                GroupByUtil.get(schoolMapper, "province"),
                Object::toString
        );
        List<Integer> numList = new ArrayList<>();
        for (String province : provinceList) {
            var count = schoolMapper.selectCount(
                    Queries.with(SchoolEntity.class)
                            .eq(SchoolEntity::getProvince, province)
            );
            numList.add(Math.toIntExact(count));
        }

        return new ChartBean()
                .setLabels(provinceList)
                .addDataset("高校数量", numList);
    }

    @GetMapping("/avg/score")
    public ChartBean getAvgScore() {
        var provinceList = ConvertUtil.from(
                GroupByUtil.get(schoolMapper, "province"),
                Object::toString
        );

        List<Integer> scoreList = new ArrayList<>();
        for (String province : provinceList) {
            var schools = schoolRepository.getListByProvince(province);
            var schoolLines = schools.parallelStream()
                    .map(SchoolBean::getId)
                    .map(schoolLineRepository::getListBySchoolId)
                    .flatMap(Collection::stream)
                    .collect(Collectors.toList());
            var sum = schoolLines.stream()
                    .map(SchoolLineBean::getScore)
                    .reduce(0, Integer::sum);
            if (schoolLines.size() == 0) {
                scoreList.add(0);
                continue;
            }
            var score = new BigDecimal(sum).divide(new BigDecimal(schoolLines.size()), 2, RoundingMode.HALF_UP);
            scoreList.add(score.intValue());
        }
        return new ChartBean()
                .setLabels(provinceList)
                .addDataset("高校平均分", scoreList);
    }

    @GetMapping("/line/{type}/{id}")
    public ChartBean getLine(@PathVariable String type, @PathVariable long id) {

        var list = schoolLineMapper.selectList(
                Queries.with(SchoolLineEntity.class)
                        .eq(SchoolLineEntity::getSchoolId, id)
        );

        Map<String, List<SchoolLineEntity>> yearMap = list.stream()
                .collect(Collectors.groupingBy(
                        SchoolLineEntity::getYear,
                        TreeMap::new,
                        Collectors.toList()
                ));
        Map<String, Integer> wList = new HashMap<>();
        Map<String, Integer> lList = new HashMap<>();
        for (Map.Entry<String, List<SchoolLineEntity>> entry : yearMap.entrySet()) {
            for (SchoolLineEntity line : entry.getValue()) {
                Integer num;
                if ("SCORE".equals(type)) {
                    num = line.getScore();
                } else {
                    num = line.getOrder();
                }
                if ("文科".equals(line.getSubjectType())) {
                    wList.put(line.getYear(), num);
                } else {
                    lList.put(line.getYear(), num);
                }
            }
        }
        return new ChartBean()
                .setLabels(yearMap.keySet())
                .addDataset("文科", this.getNumList(yearMap, wList))
                .addDataset("理科", this.getNumList(yearMap, lList));
    }

    private List<Integer> getNumList(Map<String, List<SchoolLineEntity>> yearMap, Map<String, Integer> map) {
        List<Integer> list = new ArrayList<>();
        for (String year : yearMap.keySet()) {
            list.add(map.get(year));
        }
        return list;
    }

}
