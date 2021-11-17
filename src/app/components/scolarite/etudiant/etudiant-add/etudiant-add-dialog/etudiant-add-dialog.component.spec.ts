import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAddDialogComponent } from './etudiant-add-dialog.component';

describe('EtudiantAddDialogComponent', () => {
  let component: EtudiantAddDialogComponent;
  let fixture: ComponentFixture<EtudiantAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
