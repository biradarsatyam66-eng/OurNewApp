import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCRUDComponent } from './std-crud.component';

describe('StdCRUDComponent', () => {
  let component: StdCRUDComponent;
  let fixture: ComponentFixture<StdCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
