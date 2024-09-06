package dev.spring.petclinic.step03_mvc_practice.repository;

import dev.spring.petclinic.step03_mvc_practice.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

