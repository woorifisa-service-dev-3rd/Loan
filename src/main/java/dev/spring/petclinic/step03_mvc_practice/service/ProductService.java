package dev.spring.petclinic.step03_mvc_practice.service;

import dev.spring.petclinic.step03_mvc_practice.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAllProducts();

    Product findProductById(Long productId);
}
