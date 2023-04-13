package com.boot.reserveproject.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@Entity
@Table(name = "board")
public class Board {
    @Id
    @Column(name = "no")
    private Long no;//게시글번호
    private String id;//작성자
    private String title;//게시글제목
    @Column(length = 10000)
    private String content;//게시글내용
    private Long readCnt;//조회수
    private String img;//등록이미지
    private LocalDate date;//등록날짜
    private String time;//등록시간

    @PrePersist
    public void setPrePersist() {
        this.date = LocalDate.now();
        LocalTime time = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        this.time=time.format(formatter);
        this.readCnt=0L;

    }

}
