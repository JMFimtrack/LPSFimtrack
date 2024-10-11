import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetwork2024Component } from './social-network-2024.component';

describe('SocialNetwork2024Component', () => {
  let component: SocialNetwork2024Component;
  let fixture: ComponentFixture<SocialNetwork2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetwork2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetwork2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
