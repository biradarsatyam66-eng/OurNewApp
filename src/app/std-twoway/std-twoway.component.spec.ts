import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTwowayComponent } from './std-twoway.component';

describe('StdTwowayComponent', () => {
  let component: StdTwowayComponent;
  let fixture: ComponentFixture<StdTwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTwowayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
