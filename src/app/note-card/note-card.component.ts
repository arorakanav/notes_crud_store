import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import {SHOW_CHECK,HIDE_CHECK} from '../state-management/reducers/check.reducer'

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() note : any ={};
  @Output() checked = new EventEmitter();

  constructor(private store: Store<any>,private router: Router) { }

  showCheck: Observable<boolean>;


  toggleCheck(st){
    if(!st)
    {
      this.store.dispatch({type: HIDE_CHECK})
    }
    else
    this.store.dispatch({type: SHOW_CHECK})
  }

  onUpdate(id){
    this.router.navigate(['/notes-update',id]);
  }

  onChecked(){
    this.checked.next(this.note);
  }

  ngOnInit() {
    this.showCheck = this.store.select('checkReducer');
  }

}
