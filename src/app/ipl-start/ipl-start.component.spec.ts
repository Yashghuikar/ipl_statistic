import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplStartComponent } from './ipl-start.component';

describe('IplStartComponent', () => {
  let component: IplStartComponent;
  let fixture: ComponentFixture<IplStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IplStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IplStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
