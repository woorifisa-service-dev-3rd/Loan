package com.example.Loan.Controller;


import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.Entity.Loan;
import com.example.Loan.Service.LoanService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        String user_id = session.getAttribute("userid").toString();

        //대출 중복 문제 고민해보기

        String savestate = loanService.SaveLoan(product_id,user_id);
        if (savestate.equals("대출 성공"))
        {
            return ResponseEntity.ok(savestate);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(savestate);
        }

    }

    //특정 사용자 모든 Loan 가져오기
    @GetMapping("/loanlist")
    public List<Loan> getLoanListByPerson(HttpSession session)
    {
        String user_id = session.getAttribute("userid").toString();
        log.info(user_id+"여기id");
        return loanService.getOneUsersLoanList(user_id);
    }


}
