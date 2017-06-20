import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesUpdaterComponent } from './notes-updater.component';

describe('NotesUpdaterComponent', () => {
  let component: NotesUpdaterComponent;
  let fixture: ComponentFixture<NotesUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
