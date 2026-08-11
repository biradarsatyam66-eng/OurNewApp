import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabngSwitchComponent } from './tabng-switch.component';

describe('TabngSwitchComponent', () => {
  let component: TabngSwitchComponent;
  let fixture: ComponentFixture<TabngSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabngSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabngSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
