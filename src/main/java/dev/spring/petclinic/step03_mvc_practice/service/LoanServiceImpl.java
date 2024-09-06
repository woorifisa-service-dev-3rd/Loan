package dev.spring.petclinic.step03_mvc_practice.service;

import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import dev.spring.petclinic.step03_mvc_practice.repository.LoanRepository;
import dev.spring.petclinic.step03_mvc_practice.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LoanServiceImpl  implements LoanService{

    private final LoanRepository loanRepository;
    private final PersonRepository personRepository;

    @Override
    public List<Loan> findLoansByPerson(Person person) {

        return loanRepository.findByPerson(person);
    }

    @Override
    public List<Loan> getLoansByUserId(String userId) {
        Person person = personRepository.findByUserId(userId);
        if (person != null) {
            return loanRepository.findByPerson(person);
        }
        return Collections.emptyList();
    }

    public void saveLoan(Loan loan) {
        loanRepository.save(loan);
    }

    public void deleteLoan(Long loanId) {
        loanRepository.deleteById(loanId);
    }

    public Loan findLoanById(Long loanId) {
        return loanRepository.findById(loanId).orElse(null);
    }
}
