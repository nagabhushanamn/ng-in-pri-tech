import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { debounceTime, map } from 'rxjs/operators';
import { range } from '../my-validators'

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm;
  errors = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // this.customerForm = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    //   name: new FormControl(''),
    // })

    // or

    this.customerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
      name: '',
      age: ['', [Validators.required, range(18, 60)]],
      email: ['', [Validators.required]],
      mobile: [''],
      noti: ['email'],
    });

    let usernameField = this.customerForm.get('username');

    usernameField.valueChanges
      .pipe(debounceTime(1000))
      .pipe(map((value: string) => value.toUpperCase()))
      .subscribe(value => {
        console.log(value)
      });

    usernameField.statusChanges
      .pipe(debounceTime(1000))
      .subscribe(status => {
        if (status === 'INVALID') {
          let errors = usernameField.errors;
          if (errors.required) {
            this.errors['username'] = 'username is required'
          }
          if (errors.minlength) {
            this.errors['username'] = '>= 3 chars'
          }
        } else {
          delete this.errors['username']
        }

      })


  }

  changeNoti(mode) {
    let mobileField = this.customerForm.get('mobile');
    if (mode === "sms") {
      mobileField.setValidators([Validators.required])
    } else {
      mobileField.clearValidators()
    }
    mobileField.updateValueAndValidity()
  }

  handleForm(event) {
    console.log(this.customerForm.value);
  }

  loadCustomer() {
    //
    let customerModel = {
      username: 'nag',
      //password: '',
      name: 'Nagbhushanam'
    }
    // this.customerForm.setValue(customerModel)
    this.customerForm.patchValue(customerModel)
    
  }

}
