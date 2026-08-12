import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetabComponent } from './practicetab.component';

describe('PracticetabComponent', () => {
  let component: PracticetabComponent;
  let fixture: ComponentFixture<PracticetabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticetabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
