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

  @Input() note : any ={};
  @Output() checked = new EventEmitter();

  constructor(private store: Store<any>,private router: Router) { }

  showCheck: boolean=false;

  toggleCheck(){
    this.showCheck=!this.showCheck;
  }

  onUpdate(id){
    this.router.navigate(['/notes-update',id]);
  }

  onChecked(){
    this.checked.next(this.note);
  }

  ngOnInit() {

  }

}
