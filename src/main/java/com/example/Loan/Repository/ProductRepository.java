package com.example.Loan.Repository;

import com.example.Loan.Entity.Loan;
import com.example.Loan.Entity.Person;
import com.example.Loan.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
}
