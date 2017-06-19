import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { AppBarComponent } from './app-bar/app-bar.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AppBarComponent,
    NoteCardComponent,
    NotesContainerComponent,
    NoteCreatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
