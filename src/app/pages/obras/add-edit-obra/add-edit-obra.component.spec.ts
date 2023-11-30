import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditObraComponent } from './add-edit-obra.component';

describe('AddEditObraComponent', () => {
  let component: AddEditObraComponent;
  let fixture: ComponentFixture<AddEditObraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditObraComponent]
    });
    fixture = TestBed.createComponent(AddEditObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
