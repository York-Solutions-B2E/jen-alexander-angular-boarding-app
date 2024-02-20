import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardingComponent } from './add-boarding.component';

describe('AddBoardingComponent', () => {
  let component: AddBoardingComponent;
  let fixture: ComponentFixture<AddBoardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBoardingComponent]
    });
    fixture = TestBed.createComponent(AddBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
