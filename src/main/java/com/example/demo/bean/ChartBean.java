package com.example.demo.bean;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Data
@Accessors(chain = true)
public class ChartBean {

    /**
     * x轴标签
     */
    private Collection<String> labels;

    /**
     * 数据集
     */
    private Collection<Dataset> datasets;

    public ChartBean addDataset(String type, Collection<? extends Number> data) {
        if (this.datasets == null) {
            this.datasets = new ArrayList<>();
        }
        this.datasets.add(new Dataset(
                type,
                data
        ));
        return this;
    }

    /**
     * x轴标签
     */
    public ChartBean addLabel(String label) {
        if (this.labels == null) {
            this.labels = new ArrayList<>();
        }
        this.labels.add(label);
        return this;
    }

    @Data
    @Accessors(chain = true)
    public static class Dataset {

        /**
         * 类型
         */
        private String label;

        /**
         * 数据
         */
        private Collection<? extends Number> data;

        private Collection<String> backgroundColor = Arrays.asList(
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
        );

        private Collection<String> borderColor = Arrays.asList(
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
        );

        private Integer borderWidth = 1;

        public Dataset(String label, Collection<? extends Number> data) {
            this.label = label;
            this.data = data;
        }
    }

}
