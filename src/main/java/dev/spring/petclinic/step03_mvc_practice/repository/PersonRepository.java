package dev.spring.petclinic.step03_mvc_practice.repository;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    Person findByUserId(String userId);

    Optional<Person> findByUserIdAndPw(String userId, String pw);

}
