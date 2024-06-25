package com.example.notes.repo;

import com.example.notes.entity.NoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NotesRepo extends JpaRepository<NoteEntity, Integer> {

    NoteEntity findByHeader(String header);
}
