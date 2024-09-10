package com.example.Loan.Controller;

import com.example.Loan.DTO.ProductResponse;
import com.example.Loan.Entity.Product;
import com.example.Loan.Service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
@Slf4j
public class ProductController {
    private final ProductService productService;

    @GetMapping
    private List<ProductResponse> GetAllProduct()
    {
        return productService.getAllProduct();
    }
}
