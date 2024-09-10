package com.example.Loan.DTO;

import com.example.Loan.Entity.Loan;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoanResponse {

    private Long loan_id;

    private ProductResponse productResponse;

    public static LoanResponse FROM(Loan loan)
    {
        return new LoanResponse(loan.getId(), ProductResponse.FROM(loan.getProduct()));
    }
}
