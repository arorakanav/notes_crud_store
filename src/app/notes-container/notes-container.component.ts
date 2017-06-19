import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  notes = [{title:'this is a note', value:'eat some food', color:'lightblue'},
  {title:'this is a note2', value:'eat some food', color:'red'},
  {title:'this is a note3', value:'eat some food', color:'yellow'},
  {title:'this is a note3', value:'eat some food', color:'yellow'}
  ]

  onNoteChecked(i : number){
    this.notes.splice(i,1);
  }
  onCreateNote(note){
    this.notes.push(note)

  }
  constructor() { }

  ngOnInit() {
  }

}
