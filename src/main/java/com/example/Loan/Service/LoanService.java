package com.example.Loan.Service;

import com.example.Loan.DTO.LoanResponse;

import java.util.List;

public interface LoanService {

    public String SaveLoan(Long product_id, String person_id);

    public List<LoanResponse> getOneUsersLoanList(String user_id);

    public boolean duplicateCheck(Long product_id, String person_id);
}
