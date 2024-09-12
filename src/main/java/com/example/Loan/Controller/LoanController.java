package com.example.Loan.Controller;


import com.example.Loan.DTO.LoanResponse;
import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.Entity.Loan;
import com.example.Loan.Service.LoanService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/loan")
@Slf4j
public class LoanController {

    private final LoanService loanService;

    @PostMapping("/{product_id}")
    public ResponseEntity<String> saveLoan (@PathVariable Long product_id,
                                            HttpSession session)
    {
        if (session.isNew())
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("로그인 부터 하세요");
        }
        String user_id = session.getAttribute("userid").toString();
        //대출 중복 문제 고민해보기x

        String savestate = loanService.SaveLoan(product_id,user_id);
        return ResponseEntity.ok(savestate);

    }

    //특정 사용자 모든 Loan 가져오기
    @GetMapping("/loanlist")
    public List<LoanResponse> getLoanListByPerson(HttpSession session)
    {
        String user_id = session.getAttribute("userid").toString();
        log.info(user_id+"여기id");
        return loanService.getOneUsersLoanList(user_id);
    }


}
