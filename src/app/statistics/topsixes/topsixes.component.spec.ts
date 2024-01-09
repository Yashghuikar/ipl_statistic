import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsixesComponent } from './topsixes.component';

describe('TopsixesComponent', () => {
  let component: TopsixesComponent;
  let fixture: ComponentFixture<TopsixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsixesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopsixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
