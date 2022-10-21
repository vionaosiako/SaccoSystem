import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsMerrygoroundComponent } from './contributions-merrygoround.component';

describe('ContributionsMerrygoroundComponent', () => {
  let component: ContributionsMerrygoroundComponent;
  let fixture: ComponentFixture<ContributionsMerrygoroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionsMerrygoroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsMerrygoroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
