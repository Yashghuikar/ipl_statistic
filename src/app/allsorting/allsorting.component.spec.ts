import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsortingComponent } from './allsorting.component';

describe('AllsortingComponent', () => {
  let component: AllsortingComponent;
  let fixture: ComponentFixture<AllsortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllsortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllsortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
