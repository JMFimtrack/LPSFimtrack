import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide2024Component } from './slide2024.component';

describe('Slide2024Component', () => {
  let component: Slide2024Component;
  let fixture: ComponentFixture<Slide2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slide2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
