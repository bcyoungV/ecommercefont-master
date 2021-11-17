import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeAddDialogComponent } from './groupe-add-dialog.component';

describe('GroupeAddDialogComponent', () => {
  let component: GroupeAddDialogComponent;
  let fixture: ComponentFixture<GroupeAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
