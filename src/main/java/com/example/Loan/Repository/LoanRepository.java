package com.example.Loan.Repository;

import com.example.Loan.Entity.Loan;
import com.example.Loan.Entity.Person;
import com.example.Loan.Entity.Product;
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
            "JOIN FETCH l.person d " +
            "WHERE d.id = :personId")
    List<Loan> findAllLoanByUserId(@Param("personId") Long personId);

    @Query("SELECT CASE WHEN COUNT(l) > 0 THEN true ELSE false END " +
            "FROM Loan l WHERE l.product.id = :productId AND l.person.id = :personId")
    boolean existsByProductIdAndPersonId(@Param("productId") Long productId, @Param("personId") Long personId);
}

