import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHeaderComponentComponent } from './welcome-header-component.component';

describe('WelcomeHeaderComponentComponent', () => {
  let component: WelcomeHeaderComponentComponent;
  let fixture: ComponentFixture<WelcomeHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
