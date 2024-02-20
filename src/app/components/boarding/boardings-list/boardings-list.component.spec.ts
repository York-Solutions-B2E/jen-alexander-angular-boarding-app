import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingsListComponent } from './boardings-list.component';

describe('BoardingsListComponent', () => {
  let component: BoardingsListComponent;
  let fixture: ComponentFixture<BoardingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardingsListComponent]
    });
    fixture = TestBed.createComponent(BoardingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
