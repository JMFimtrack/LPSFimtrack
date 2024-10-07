import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenfinComponent } from './buenfin.component';

describe('BuenfinComponent', () => {
  let component: BuenfinComponent;
  let fixture: ComponentFixture<BuenfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuenfinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuenfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
