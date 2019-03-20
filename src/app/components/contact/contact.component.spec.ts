import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    button = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Angular Meetup Contact Form'`, async(() => {
    expect(component.text).toEqual('Angular Meetup Contact Form');
  }));

  it('doSomethingcool function should set submitted to true when called', async(() => {
    component.doSomethingCool();
    expect(component.submitted).toBeTruthy();
  }));

  it('should not call the doSomethingCool function', async(() => {
    spyOn(component, 'doSomethingCool');
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.doSomethingCool).toHaveBeenCalledTimes(0);
  }));

  it('Form should be valid', async(() => {
    component.contactForm.controls.email.setValue('femibams@gmail.com');
    component.contactForm.controls.fullname.setValue('Bamidele Oluwafemi');
    component.contactForm.controls.text.setValue('Hello there!!');
    expect(component.contactForm.valid).toBeTruthy();
  }));

  it('Form should not be valid', async(() => {
    component.contactForm.controls.email.setValue('');
    component.contactForm.controls.fullname.setValue('');
    component.contactForm.controls.text.setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));
});
