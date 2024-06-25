import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {Note} from "../note";
import {ActivatedRoute, Router} from "@angular/router";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    NgIf,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatCardActions,
    MatButton
  ],
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.scss'
})
export class NoteEditComponent implements OnInit {
  note: Note | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.noteService.getNoteById(id).subscribe({
        next: value => this.note = value,
        error: err => console.log(err)
      });
    } else {
      this.note = {header: '', text: ''};
    }
  }

  saveNote() {
    if (this.note) {
      this.noteService.saveNote(this.note).subscribe({
        next: () => this.router.navigate(['/']),
        error: err => console.log(err)})
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
