import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import {ADD_NOTE,DELETE_NOTE} from '../state-management/reducers/notes.reducer'

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  notes: Observable<any>;
  title: string;
  value: any;

  onNoteChecked(i : number){
    this.store.dispatch({ type: DELETE_NOTE, payload: i });;
  }
  onCreateNote(note){
    this.store.dispatch({ type: ADD_NOTE, payload: { note, done: false } } );


  }
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.notes = this.store.select('notesReducer');
  }

}
