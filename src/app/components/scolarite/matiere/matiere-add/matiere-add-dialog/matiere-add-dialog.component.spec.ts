import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereAddDialogComponent } from './matiere-add-dialog.component';

describe('MatiereAddDialogComponent', () => {
  let component: MatiereAddDialogComponent;
  let fixture: ComponentFixture<MatiereAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
