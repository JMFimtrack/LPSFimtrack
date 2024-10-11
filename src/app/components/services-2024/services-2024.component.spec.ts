import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services2024Component } from './services-2024.component';

describe('Services2024Component', () => {
  let component: Services2024Component;
  let fixture: ComponentFixture<Services2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Services2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
