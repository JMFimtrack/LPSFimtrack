import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCard2024Component } from './go-card2024.component';

describe('GoCard2024Component', () => {
  let component: GoCard2024Component;
  let fixture: ComponentFixture<GoCard2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoCard2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoCard2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
