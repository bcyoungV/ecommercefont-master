import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAddDialogComponent } from './module-add-dialog.component';

describe('ModuleAddDialogComponent', () => {
  let component: ModuleAddDialogComponent;
  let fixture: ComponentFixture<ModuleAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
