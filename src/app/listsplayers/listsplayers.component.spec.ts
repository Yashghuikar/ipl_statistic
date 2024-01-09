import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsplayersComponent } from './listsplayers.component';

describe('ListsplayersComponent', () => {
  let component: ListsplayersComponent;
  let fixture: ComponentFixture<ListsplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
