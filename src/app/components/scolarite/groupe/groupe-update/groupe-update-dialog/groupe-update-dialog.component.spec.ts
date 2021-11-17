import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeUpdateDialogComponent } from './groupe-update-dialog.component';

describe('GroupeUpdateDialogComponent', () => {
  let component: GroupeUpdateDialogComponent;
  let fixture: ComponentFixture<GroupeUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
