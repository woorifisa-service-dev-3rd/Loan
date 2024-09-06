package dev.spring.petclinic.step03_mvc_practice.service;

import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import dev.spring.petclinic.step03_mvc_practice.model.Product;
import dev.spring.petclinic.step03_mvc_practice.repository.LoanRepository;
import dev.spring.petclinic.step03_mvc_practice.repository.PersonRepository;
import dev.spring.petclinic.step03_mvc_practice.repository.ProductRepository;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RegisterServiceImpl implements RegisterService {


    private final PersonRepository personRepository;

    private final HttpSession httpSession;

    @Override
    public Person registerPerson(String userId, String pw) {
        Person person = new Person();
        person.setUserId(userId);
        person.setPw(pw);

        return personRepository.save(person);
    }

    @Override
    public String login(String userId, String pw) {
        Optional<Person> person = personRepository.findByUserIdAndPw(userId, pw);
        return person.get().getNickname();
    }

    @Override
    public Person findPersonByUserId(String userId) {
        return personRepository.findByUserId(userId);
    }

    @Override
    public String getLoggedInUserId() {
        return (String) httpSession.getAttribute("userId");
    }
}

