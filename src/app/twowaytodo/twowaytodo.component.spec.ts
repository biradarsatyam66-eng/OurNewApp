import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaytodoComponent } from './twowaytodo.component';

describe('TwowaytodoComponent', () => {
  let component: TwowaytodoComponent;
  let fixture: ComponentFixture<TwowaytodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaytodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaytodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
