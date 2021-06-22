import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCelebritiesComponent } from './modal-celebrities.component';

describe('ModalCelebritiesComponent', () => {
  let component: ModalCelebritiesComponent;
  let fixture: ComponentFixture<ModalCelebritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCelebritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCelebritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
