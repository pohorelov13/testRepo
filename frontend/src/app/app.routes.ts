import { Routes } from '@angular/router';
import {NoteListComponent} from "./node-list/note-list.component";
import {NoteDetailComponent} from "./note-detail/note-detail.component";
import {NoteEditComponent} from "./note-edit/note-edit.component";

export const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'edit/:id', component: NoteEditComponent },
  { path: 'new', component: NoteEditComponent }
];
