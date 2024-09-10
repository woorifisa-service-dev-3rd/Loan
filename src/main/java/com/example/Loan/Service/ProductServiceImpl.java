package com.example.Loan.Service;

import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.DTO.ProductResponse;
import com.example.Loan.Entity.Product;
import com.example.Loan.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<ProductResponse> getAllProduct() {
        return productRepository.findAll().stream().map(ProductResponse::FROM)
                .collect(Collectors.toList());
    }
}
