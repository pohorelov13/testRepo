package com.example.notes.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Notes")
public class NoteEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String header;
    private String text;
}
