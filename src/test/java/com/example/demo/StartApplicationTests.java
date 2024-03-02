package com.example.demo;

import cn.hutool.core.util.RandomUtil;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.stream.Collectors;

@SpringBootTest
class StartApplicationTests {

    @Test
    void contextLoads() {

    }

    public <T> T random(T... items) {
        return RandomUtil.randomEle(
                Arrays.stream(items)
                        .collect(Collectors.toList())
        );
    }

}
