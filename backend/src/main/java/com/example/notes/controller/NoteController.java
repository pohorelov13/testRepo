package com.example.notes.controller;

import com.example.notes.entity.NoteEntity;
import com.example.notes.repo.NotesRepo;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("notes")
@RequiredArgsConstructor
public class NoteController {
    private final NotesRepo repo;

    @PostMapping("/add")
    public void addNote(@RequestBody NoteEntity note) {
        repo.save(note);
    }

    @GetMapping
    public ResponseEntity<List<NoteEntity>> getNotes(){
        return ResponseEntity.ok(repo.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteEntity> getNoteById(@PathVariable Integer id) {
        return ResponseEntity.ok(repo.findById(id).orElseThrow());
    }

    @GetMapping("/find")
    public ResponseEntity<NoteEntity> getNoteByHeader(@PathParam("header") String header) {
        return ResponseEntity.ok(repo.findByHeader(header));
    }

    @GetMapping("/message")
    public ResponseEntity<String> ping() {
        return ResponseEntity.ok("OK");
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateNote(@RequestBody NoteEntity note) {
        repo.save(note);
        return ResponseEntity.ok("OK");
    }
}
