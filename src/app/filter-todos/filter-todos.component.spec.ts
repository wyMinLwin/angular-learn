import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTodosComponent } from './filter-todos.component';

describe('FilterTodosComponent', () => {
  let component: FilterTodosComponent;
  let fixture: ComponentFixture<FilterTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTodosComponent]
    });
    fixture = TestBed.createComponent(FilterTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
