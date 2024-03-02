package com.example.demo.component;

import com.zaxxer.hikari.HikariDataSource;
import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.impl.model.jdbc.MySQLJDBCDataModel;
import org.apache.mahout.cf.taste.impl.neighborhood.ThresholdUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.SpearmanCorrelationSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.Recommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 协同过滤
 */
@Component
public class RecommendedComponent {

    @Autowired
    private HikariDataSource dataSource;

    public List<Long> getIdList(long userId, int size) {

        try {
            return this.exec(userId, size);
        } catch (TasteException e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    private List<Long> exec(long userId, int size) throws TasteException {

        DataModel dataModel = this.getDataModel();
        UserSimilarity similarity = new SpearmanCorrelationSimilarity(dataModel);
        UserNeighborhood neighborhood = new ThresholdUserNeighborhood(0.1, similarity, dataModel);
        Recommender recommender = new GenericUserBasedRecommender(dataModel, neighborhood, similarity);
        return recommender.recommend(userId, size)
                .stream()
                .map(RecommendedItem::getItemID)
                .collect(Collectors.toList());
    }

    private DataModel getDataModel() {
        return new MySQLJDBCDataModel(
                dataSource,
                "user_access_history",
                "user_id",
                "item_id",
                "times",
                "create_time"
        );
    }
}

