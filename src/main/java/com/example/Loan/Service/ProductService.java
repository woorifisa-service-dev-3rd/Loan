package com.example.Loan.Service;

import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.DTO.ProductResponse;
import com.example.Loan.Entity.Product;

import java.util.List;


public interface ProductService {

    public List<ProductResponse> getAllProduct();

}
