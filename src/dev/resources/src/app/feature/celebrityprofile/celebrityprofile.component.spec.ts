import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityprofileComponent } from './celebrityprofile.component';

describe('CelebrityprofileComponent', () => {
  let component: CelebrityprofileComponent;
  let fixture: ComponentFixture<CelebrityprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
