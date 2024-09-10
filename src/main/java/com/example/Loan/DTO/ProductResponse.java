package com.example.Loan.DTO;

import com.example.Loan.Entity.Product;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
public class ProductResponse {

    private Long id;
    @NotNull
    private String company;

    private String title;

    private BigDecimal min_rate ;

    private BigDecimal max_limit;

    public static ProductResponse FROM(Product product)
    {
        return new ProductResponse(product.getId(),product.getCompany(), product.getTitle(),
                product.getMin_rate(),product.getMax_limit()) ;
    }
}
