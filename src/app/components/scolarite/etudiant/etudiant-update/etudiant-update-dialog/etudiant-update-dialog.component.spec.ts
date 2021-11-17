import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantUpdateDialogComponent } from './etudiant-update-dialog.component';

describe('EtudiantUpdateDialogComponent', () => {
  let component: EtudiantUpdateDialogComponent;
  let fixture: ComponentFixture<EtudiantUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
