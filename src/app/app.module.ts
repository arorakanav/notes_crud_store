import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http'
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { notesReducer } from './state-management/reducers/notes.reducer'
import {  checkReducer } from "./state-management/reducers/check.reducer";
import {routes} from './routes.routing';
import { NotesUpdaterComponent } from './notes-updater/notes-updater.component';






@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AppBarComponent,
    NoteCardComponent,
    NotesContainerComponent,
    NoteCreatorComponent,
    NotesUpdaterComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StoreModule.provideStore({notesReducer,checkReducer}),
    HttpModule,
    routes,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
