import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNgoDetailsComponent } from './display-ngo-details.component';

describe('DisplayNgoDetailsComponent', () => {
  let component: DisplayNgoDetailsComponent;
  let fixture: ComponentFixture<DisplayNgoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNgoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayNgoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
