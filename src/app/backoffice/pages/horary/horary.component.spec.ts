import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraryComponent } from './horary.component';

describe('HoraryComponent', () => {
  let component: HoraryComponent;
  let fixture: ComponentFixture<HoraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
