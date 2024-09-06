package com.example.Loan.Service;

import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.Entity.Product;
import com.example.Loan.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;


    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }
}
