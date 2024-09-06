package com.example.Loan.DTO;

import com.example.Loan.Entity.Person;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PersonDTOByFront {

    private String user_id;

    private String password;

    private String username;


}
