package dev.spring.petclinic.step03_mvc_practice.service;

import dev.spring.petclinic.step03_mvc_practice.model.Product;
import dev.spring.petclinic.step03_mvc_practice.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product findProductById(Long productId) {
        return productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("Invalid product ID"));
    }
}
