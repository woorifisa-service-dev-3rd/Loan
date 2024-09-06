package com.example.Loan.Service;

import com.example.Loan.DTO.LoginDTO;
import com.example.Loan.DTO.PersonDTOByFront;

import javax.servlet.http.HttpSession;

public interface PersonService {
    String signup(PersonDTOByFront personDTOByFront);

    Boolean IDDuplicateCheck(String user_id);

    Boolean NickDuplicateCheck(String user_id);

    Boolean ValidateLogin(LoginDTO loginDTO);
    String login(LoginDTO loginDTO, HttpSession session);
}
