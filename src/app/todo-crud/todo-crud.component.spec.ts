import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCRUDComponent } from './todo-crud.component';

describe('TodoCRUDComponent', () => {
  let component: TodoCRUDComponent;
  let fixture: ComponentFixture<TodoCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
