import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TophundredComponent } from './tophundred.component';

describe('TophundredComponent', () => {
  let component: TophundredComponent;
  let fixture: ComponentFixture<TophundredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TophundredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TophundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
