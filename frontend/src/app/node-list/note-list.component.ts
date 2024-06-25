import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatLine} from "@angular/material/core";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {NgForOf} from "@angular/common";
import {Note} from "../note";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-node-list',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLine,
    MatListItem,
    MatNavList,
    MatToolbar,
    NgForOf
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit{
  filteredNotes:Note[] = []

  constructor(private readonly http: HttpClient, public router: Router) {
  }

  ngOnInit(): void {
    this.http.get<Note[]>('https://stately-lambda-427413-h4.lm.r.appspot.com/notes').subscribe({
      next: value => this.filteredNotes = value,
      error: error => console.log(error),
    });
  }

}
