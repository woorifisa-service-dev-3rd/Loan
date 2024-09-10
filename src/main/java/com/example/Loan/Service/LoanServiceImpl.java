package com.example.Loan.Service;

import com.example.Loan.DTO.LoanResponse;
import com.example.Loan.Entity.Loan;
import com.example.Loan.Entity.Person;
import com.example.Loan.Entity.Product;
import com.example.Loan.Repository.LoanRepository;
import com.example.Loan.Repository.PersonRepository;
import com.example.Loan.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoanServiceImpl implements LoanService{

    private final LoanRepository loanRepository;

    private final PersonRepository personRepository;

    private final ProductRepository productRepository;

    @Override
    @Transactional
    public String SaveLoan(Long product_id, String user_id) {
        //person_id는 autoincrement가 아니라 userid임.

        try {
            Person person = personRepository.findByUserId(user_id).orElseThrow(
                    () -> new RuntimeException("사용자 없음")
            );

            Product product = productRepository.findById(product_id).orElseThrow(
                    () -> new RuntimeException("상품 없음")
            ); //이건 auto id

            loanRepository.save(Loan.builder().person(person).product(product).build());
            return "대출 성공";
        } catch (RuntimeException re)
        {
            log.info(re.getMessage());
            return "대출 도중 오류 발생";
        }

    }

    @Transactional
    @Override
    public List<LoanResponse> getOneUsersLoanList(String user_id) {
        Long person_id = personRepository.findByUserId(user_id).orElseThrow(() -> new RuntimeException("User not found")).getId();
        return loanRepository.findAllLoanByUserId(person_id).stream()
                .map(LoanResponse::FROM)
                .collect(Collectors.toList());
    }
}
