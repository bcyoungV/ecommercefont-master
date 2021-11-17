import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereUpdateDialogComponent } from './matiere-update-dialog.component';

describe('MatiereUpdateDialogComponent', () => {
  let component: MatiereUpdateDialogComponent;
  let fixture: ComponentFixture<MatiereUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
