import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereUpdateComponent } from './matiere-update.component';

describe('MatiereUpdateComponent', () => {
  let component: MatiereUpdateComponent;
  let fixture: ComponentFixture<MatiereUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
