import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHeaderComponentComponent } from './welcome-header-component.component';

fdescribe('WelcomeHeaderComponentComponent', () => {
  let component: WelcomeHeaderComponentComponent;
  let fixture: ComponentFixture<WelcomeHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeHeaderComponentComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WelcomeHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should contain the text "Welcome"', () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).toContain("Welcome");
  });
  it("should contain the name of the active user from the controller", () => {
    const activeUser = component.activeUser;
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).toContain(activeUser.firstName);
  });

  it("'it()' is a Jasmine function that lets us define a test case", () => {
   expect(true).toBe(true);
  });
});
