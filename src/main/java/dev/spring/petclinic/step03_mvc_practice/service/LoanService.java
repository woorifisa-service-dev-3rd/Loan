package dev.spring.petclinic.step03_mvc_practice.service;

import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import dev.spring.petclinic.step03_mvc_practice.repository.LoanRepository;
import dev.spring.petclinic.step03_mvc_practice.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

public interface LoanService {


    List<Loan> findLoansByPerson(Person person);

    public List<Loan> getLoansByUserId(String userId);

    public void saveLoan(Loan loan);

    public void deleteLoan(Long loanId);

    public Loan findLoanById(Long loanId);
}
