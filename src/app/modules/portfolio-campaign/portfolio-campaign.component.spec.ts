import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCampaignComponent } from './portfolio-campaign.component';

describe('PortfolioCampaignComponent', () => {
  let component: PortfolioCampaignComponent;
  let fixture: ComponentFixture<PortfolioCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
