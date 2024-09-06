package dev.spring.petclinic.step03_mvc_practice.controller;

import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import dev.spring.petclinic.step03_mvc_practice.model.Product;
import dev.spring.petclinic.step03_mvc_practice.service.LoanService;
import dev.spring.petclinic.step03_mvc_practice.service.ProductService;
import dev.spring.petclinic.step03_mvc_practice.service.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final LoanService loanService;
    private final RegisterService registerService;

    @GetMapping("/")
    public String showMainPage(Model model) {
        model.addAttribute("products", productService.findAllProducts());
        return "product/index";
    }


    @GetMapping("/user-products")
    public String showUserProducts(Model model) {
        String userId = registerService.getLoggedInUserId();
        Person person = registerService.findPersonByUserId(userId);
        model.addAttribute("loans", loanService.findLoansByPerson(person));
        model.addAttribute("products", productService.findAllProducts());

        return "loan/list";
    }

    @PostMapping("/add-product/{productId}")
    public String addProductToUser(@PathVariable Long productId) {
        String userId = registerService.getLoggedInUserId();
        Person person = registerService.findPersonByUserId(userId);
        Product product = productService.findProductById(productId);

        Loan loan = new Loan();
        loan.setPerson(person);
        loan.setProduct(product);
        loanService.saveLoan(loan);

        return "redirect:/product/user-products";
    }

    @PostMapping("/delete-loan/{loanId}")
    public String removeProductFromUser(@PathVariable Long loanId) {
        String userId = registerService.getLoggedInUserId();

        loanService.deleteLoan(loanId);

        return "redirect:/product/user-products";
    }

}
