import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleUpdateDialogComponent } from './module-update-dialog.component';

describe('ModuleUpdateDialogComponent', () => {
  let component: ModuleUpdateDialogComponent;
  let fixture: ComponentFixture<ModuleUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
