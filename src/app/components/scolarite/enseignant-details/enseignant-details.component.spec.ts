import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDetailsComponent } from './enseignant-details.component';

describe('EnseignantDetailsComponent', () => {
  let component: EnseignantDetailsComponent;
  let fixture: ComponentFixture<EnseignantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
