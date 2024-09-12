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

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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

    @PersistenceContext
    private EntityManager entityManger;

    @Override
    @Transactional
    public String SaveLoan(Long product_id, String user_id) {
        //person_id는 autoincrement가 아니라 userid임.


            Person person = personRepository.findByUserId(user_id).orElseThrow(
                    () -> new RuntimeException("사용자 없음")
            );

            Product product = productRepository.findById(product_id).orElseThrow(
                    () -> new RuntimeException("상품 없음")
            ); //이건 auto id

            if(duplicateCheck(product_id,user_id))
            {
                loanRepository.save(Loan.builder().person(person).product(product).build());
                return "대출 성공";
            } else{
                return "이미 대출된 상품입니다";
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

    @Override
    public boolean duplicateCheck(Long product_id, String person_user_id) {

        Long person_pk_id = personRepository.findByUserId(person_user_id).get().getId();

        return !loanRepository.existsByProductIdAndPersonId(product_id,person_pk_id);
    }
}
