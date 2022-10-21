import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsMonthlysavingsComponent } from './contributions-monthlysavings.component';

describe('ContributionsMonthlysavingsComponent', () => {
  let component: ContributionsMonthlysavingsComponent;
  let fixture: ComponentFixture<ContributionsMonthlysavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionsMonthlysavingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsMonthlysavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
