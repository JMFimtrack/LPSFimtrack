import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warnings2024Component } from './warnings-2024.component';

describe('Warnings2024Component', () => {
  let component: Warnings2024Component;
  let fixture: ComponentFixture<Warnings2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Warnings2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Warnings2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
