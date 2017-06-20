import {  Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core'
import { NotesContainerComponent } from './notes-container/notes-container.component'
import { ContainerComponent} from './container/container.component'
import { NotesUpdaterComponent } from './notes-updater/notes-updater.component';
import {NoteCardComponent} from './note-card/note-card.component'



export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path:'',
    component : ContainerComponent,
    children:[
              {path:'' , component: NotesContainerComponent,
              children:[
                        {path:'', component:NoteCardComponent}
                      ]
              },
              {path:'notes-update/:id', component: NotesUpdaterComponent },
            ]
  },
  //{ path:'**', redirectTo:''}
])
