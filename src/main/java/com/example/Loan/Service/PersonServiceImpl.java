package com.example.Loan.Service;

import com.example.Loan.DTO.LoginDTO;
import com.example.Loan.DTO.PersonDTOByFront;
import com.example.Loan.Entity.Person;
import com.example.Loan.Repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService{

    private final PersonRepository personRepository;

    @Override
    public String signup(PersonDTOByFront personDTOByFront) {

        try{
            Person newperson = Person.builder()
                    .userId(personDTOByFront.getUser_id())
                    .password(personDTOByFront.getPassword())
                    .username(personDTOByFront.getUsername())
                    .build();
            personRepository.save(newperson);

            return "회원가입 성공";
        } catch (Exception e)
        {
            return "회원가입 실패";
        }


    }

    @Override
    public Boolean IDDuplicateCheck(String user_id) {
        Optional<Person> person = personRepository.findByUserId(user_id);
        return person.isEmpty();
    }


    @Override
    public Boolean NickDuplicateCheck(String nickname) {
        Optional<Person> person = personRepository.findByUsername(nickname);
        return person.isEmpty();
    }

    @Override
    public Boolean ValidateLogin(LoginDTO loginDTO) {
        return personRepository.findByUserId(loginDTO.getUser_id())
                .map(person -> person.getPassword().equals(loginDTO.getPassword()))
                .orElse(false);
    }

    @Override
    public String login(LoginDTO loginDTO, HttpSession session)
    {
        if(ValidateLogin(loginDTO))
        {
            String userid = loginDTO.getUser_id();
            session.setAttribute("userid",userid);
            return "로그인 성공";
        } else{
            return "사용자 정보를 다시 확인해주세요";
        }

    }


}
