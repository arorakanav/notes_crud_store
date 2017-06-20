import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import {SHOW_CHECK,REMOVE_CHECK} from '../state-management/reducers/notes.reducer'

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() note ={};
  @Output() checked = new EventEmitter();
  @Output() update = new EventEmitter();



  constructor(private store: Store<any>,private router: Router) { }

  showCheck: boolean=false;
  //showCheck: Observable<boolean>;

  toggleCheck(){
    this.showCheck=!this.showCheck;
  }

  onUpdate(id){
    //this.update.next(this.note);
    this.router.navigate(['/notes-update',id]);
  }

  //toggleShow(){
    //this.showCheck = !this.showCheck;
    //this.store.dispatch({ type: REMOVE_CHECK, payload: true });
  //}

  //toggleRemove(){
    //this.store.dispatch({ type: REMOVE_CHECK, payload: false });
  //}

  onChecked(){
    this.checked.next(this.note);
  }
  ngOnInit() {

    //this.showCheck = this.store.select('notesReducer');

  }

}
