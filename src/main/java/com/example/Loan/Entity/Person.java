package com.example.Loan.Entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity(name = "person")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    @NotNull
    private String userId;

    @Column(nullable = false)
    @NotNull
    private String password;

    @Column(nullable = false)
    @NotNull
    private String username;

    @Builder
    public Person(String userId, String password, String username) {
        this.userId = userId;
        this.password = password;
        this.username = username;
    }
}
