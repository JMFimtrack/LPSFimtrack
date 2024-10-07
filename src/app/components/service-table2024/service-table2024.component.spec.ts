import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTable2024Component } from './service-table2024.component';

describe('ServiceTable2024Component', () => {
  let component: ServiceTable2024Component;
  let fixture: ComponentFixture<ServiceTable2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTable2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTable2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
