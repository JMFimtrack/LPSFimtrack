import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buenfin2024Component } from './buenfin-2024.component';

describe('Buenfin2024Component', () => {
  let component: Buenfin2024Component;
  let fixture: ComponentFixture<Buenfin2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buenfin2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buenfin2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
