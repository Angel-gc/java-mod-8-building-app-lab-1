import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactComponentComponent } from './app-contact-component.component';

describe('AppContactComponentComponent', () => {
  let component: AppContactComponentComponent;
  let fixture: ComponentFixture<AppContactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
