package dev.spring.petclinic.step03_mvc_practice.model;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String title;
    private BigDecimal minRate;
    private BigDecimal maxLimit;
}
