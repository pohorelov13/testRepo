import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) {
  }

  getNoteById(id: number) {
    return this.http.get<Note>('https://stately-lambda-427413-h4.lm.r.appspot.com/notes/' + id);
  }


  deleteNote(id?: number) {
    console.log(id)
  }

  saveNote(note: Note) {
    return this.http.post<string>('https://stately-lambda-427413-h4.lm.r.appspot.com/notes/add', note );
  }
}
