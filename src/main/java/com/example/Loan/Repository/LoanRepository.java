package com.example.Loan.Repository;

import com.example.Loan.Entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    @Query("SELECT l " +
            "FROM Loan l " +
            "JOIN FETCH l.product p " +
            "WHERE l.person.id = :personId")
    List<Loan> findAllLoanByUserId(@Param("personId") Long personId);
}

