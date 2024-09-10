package com.example.Loan.Controller;

import com.example.Loan.DTO.LoginDTO;
import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.Service.PersonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@RequestMapping("/person")
@Slf4j
public class PersonController {

    private final PersonService personService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup (@RequestBody PersonDTOByFront personDTOByFront)
    {
        return ResponseEntity.ok(personService.signup(personDTOByFront));
    }

    //ID 중복 체크 (false가 회원가입 안된다는 뜻)
    @GetMapping("/id_check/{user_id}")
    public ResponseEntity<Boolean> IDCheck(@PathVariable String user_id)
    {
        return ResponseEntity.ok(personService.IDDuplicateCheck(user_id));
    }

    //닉네임 중복 체크
    @GetMapping("/nick_check/{nickname}")
    public ResponseEntity<Boolean> NickCheck(@PathVariable String nickname)
    {
        return ResponseEntity.ok(personService.NickDuplicateCheck(nickname));
    }

    @GetMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO, HttpSession session)
    {
        String result = personService.login(loginDTO,session);
        if (result.equals("로그인 성공"))
        {
            log.info("로그인성공후 세션아이디"+session.getAttribute("userid").toString());
            return ResponseEntity.ok(result);
        }   else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
        }
    }

    @GetMapping("/sessioncheck")
    public boolean sessionCheck(HttpSession session) {
        return session.getAttribute("userid") != null;
    }



}
