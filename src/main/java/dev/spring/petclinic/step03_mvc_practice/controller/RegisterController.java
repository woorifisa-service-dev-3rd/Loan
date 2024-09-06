package dev.spring.petclinic.step03_mvc_practice.controller;

import dev.spring.petclinic.step03_mvc_practice.DTO.PersonDTO;
import dev.spring.petclinic.step03_mvc_practice.model.Loan;
import dev.spring.petclinic.step03_mvc_practice.model.Person;
import dev.spring.petclinic.step03_mvc_practice.model.Product;
import dev.spring.petclinic.step03_mvc_practice.service.RegisterService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/web")
@RequiredArgsConstructor
@Controller
public class RegisterController {

    private final RegisterService registerService;

    @GetMapping("/register")
    public String showRegisterPage() {
        return "person/register";
    }

    @PostMapping("/register")
    public String registerPerson(@RequestParam String nickname,
                                 @RequestParam String userId,
                                 @RequestParam String pw) {
        Person person = new Person();
        person.setNickname(nickname);
        person.setUserId(userId);
        person.setPw(pw);
        registerService.registerPerson(userId, pw);
        return "redirect:/web/login";
    }

    @GetMapping("/login")
    public String showLoginPage() {
        return "person/login";
    }

    @PostMapping("/login")
    public String login(PersonDTO personDTO, HttpSession session) {
        String nickname = registerService.login(personDTO.getUserId(), personDTO.getPw());
        if (nickname != null) {
            session.setAttribute("userId", personDTO.getUserId());
            return "redirect:/product/user-products";
        } else {
            return "redirect:/login?error=true";
        }
    }


    @GetMapping("/")
    public String showMainPage(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "person/index";
    }

}

