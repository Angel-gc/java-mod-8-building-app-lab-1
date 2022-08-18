import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConversionHistoryComponentComponent } from './app-conversion-history-component.component';

describe('AppConversionHistoryComponentComponent', () => {
  let component: AppConversionHistoryComponentComponent;
  let fixture: ComponentFixture<AppConversionHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppConversionHistoryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConversionHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
