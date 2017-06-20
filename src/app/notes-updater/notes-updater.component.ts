import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {UPDATE_NOTE} from '../state-management/reducers/notes.reducer'

@Component({
  selector: 'app-notes-updater',
  templateUrl: './notes-updater.component.html',
  styleUrls: ['./notes-updater.component.css']
})
export class NotesUpdaterComponent implements OnInit {

  //@Input() id;
  private temp;
  note_edit: Observable<any>;
  id: string;
  constructor(private route: ActivatedRoute,private location: Location,private store: Store<any>) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onUpdate(note){
    console.log(note);
        this.store.dispatch({ type:UPDATE_NOTE , payload: {title: note.title, value: note.value, id: this.id}   } );
        this.location.back();

  }

  ngOnInit() {
    this.note_edit=this.store.select('notesReducer');
    //.forEach((notes)=>{

      //console.log(notes[0].id)
    //})
  }

}
