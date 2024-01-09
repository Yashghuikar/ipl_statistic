import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiftyComponent } from './topfifty.component';

describe('TopfiftyComponent', () => {
  let component: TopfiftyComponent;
  let fixture: ComponentFixture<TopfiftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopfiftyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopfiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
