import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUserMessagesComponent } from './active-user-messages.component';

describe('ActiveUserMessagesComponent', () => {
  let component: ActiveUserMessagesComponent;
  let fixture: ComponentFixture<ActiveUserMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUserMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUserMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
