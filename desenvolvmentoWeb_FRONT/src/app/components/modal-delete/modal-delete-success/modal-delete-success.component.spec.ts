import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteSuccessComponent } from './modal-delete-success.component';

describe('ModalDeleteSuccessComponent', () => {
  let component: ModalDeleteSuccessComponent;
  let fixture: ComponentFixture<ModalDeleteSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteSuccessComponent]
    });
    fixture = TestBed.createComponent(ModalDeleteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
