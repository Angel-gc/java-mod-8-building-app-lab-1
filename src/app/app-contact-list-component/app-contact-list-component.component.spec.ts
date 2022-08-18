import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactListComponentComponent } from './app-contact-list-component.component';

describe('AppContactListComponentComponent', () => {
  let component: AppContactListComponentComponent;
  let fixture: ComponentFixture<AppContactListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
