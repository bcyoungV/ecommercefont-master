import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantUpdateDialogComponent } from './enseignant-update-dialog.component';

describe('EnseignantUpdateDialogComponent', () => {
  let component: EnseignantUpdateDialogComponent;
  let fixture: ComponentFixture<EnseignantUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
