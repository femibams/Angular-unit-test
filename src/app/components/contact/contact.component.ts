import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  text = 'Angular Meetup Contact Form';
  contact  = {
    fullname: '',
    email: '',
    text: ''
  };
  contactForm: FormGroup;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      fullname: new FormControl(this.contact.fullname, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(this.contact.email, [Validators.required, Validators.email]),
      text: new FormControl(this.contact.text, [Validators.required])
    });
  }

  doSomethingCool() {
    this.submitted = true;
    console.log('value', this.submitted);
  }

  ngOnInit() {
  }

}
