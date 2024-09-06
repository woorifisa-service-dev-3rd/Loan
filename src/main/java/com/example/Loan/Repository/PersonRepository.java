package com.example.Loan.Repository;

import com.example.Loan.Entity.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends CrudRepository<Person,Long> {
    Optional<Person> findByUserId(String user_id);
    Optional<Person> findByUsername(String username);
}
