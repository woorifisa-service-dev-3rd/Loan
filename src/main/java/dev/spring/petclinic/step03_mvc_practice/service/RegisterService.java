package dev.spring.petclinic.step03_mvc_practice.service;

import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import dev.spring.petclinic.step03_mvc_practice.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

public interface RegisterService {
    // Person 엔티티 등록
    Person registerPerson(String userId, String pw);

    String login(String userId, String pw);

    Person findPersonByUserId(String userId);

    String getLoggedInUserId();
}

