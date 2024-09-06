package com.example.Loan.Entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity(name = "product")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String company;

    private String title;

    private BigDecimal min_rate ;
    // %

    private BigDecimal max_limit;
    //만원 단위

    @Builder
    public Product(String company, String title, BigDecimal min_rate, BigDecimal max_limit) {
        this.company = company;
        this.title = title;
        this.min_rate = min_rate;
        this.max_limit = max_limit;
    }
}
