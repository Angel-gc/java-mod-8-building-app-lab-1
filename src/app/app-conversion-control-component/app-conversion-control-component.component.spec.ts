import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConversionControlComponentComponent } from './app-conversion-control-component.component';

describe('AppConversionControlComponentComponent', () => {
  let component: AppConversionControlComponentComponent;
  let fixture: ComponentFixture<AppConversionControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppConversionControlComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConversionControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
