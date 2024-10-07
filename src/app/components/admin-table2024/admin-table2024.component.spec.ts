import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTable2024Component } from './admin-table2024.component';

describe('AdminTable2024Component', () => {
  let component: AdminTable2024Component;
  let fixture: ComponentFixture<AdminTable2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTable2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTable2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
