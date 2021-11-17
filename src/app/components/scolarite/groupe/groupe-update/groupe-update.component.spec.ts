import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeUpdateComponent } from './groupe-update.component';

describe('GroupeUpdateComponent', () => {
  let component: GroupeUpdateComponent;
  let fixture: ComponentFixture<GroupeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
