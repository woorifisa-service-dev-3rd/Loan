package dev.spring.petclinic.step03_mvc_practice.controller;

import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class LoanController {

    private final LoanService loanService;

    @GetMapping("/loans")
    public String viewLoans(Model model, @RequestParam String userId) {
        List<Loan> loans = loanService.getLoansByUserId(userId);
        model.addAttribute("loans", loans);
        return "loan/list";
    }
}
