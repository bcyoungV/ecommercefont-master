import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantAddDialogComponent } from './enseignant-add-dialog.component';

describe('EnseignantAddDialogComponent', () => {
  let component: EnseignantAddDialogComponent;
  let fixture: ComponentFixture<EnseignantAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
