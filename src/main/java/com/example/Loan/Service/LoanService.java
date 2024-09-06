package com.example.Loan.Service;

import com.example.Loan.Entity.Loan;

import java.util.List;

public interface LoanService {

    public String SaveLoan(Long product_id, String person_id);

    public List<Loan> getOneUsersLoanList(String user_id);
}
