import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('f') form : NgForm;

  subscriptions = [
    'Basic',
    'Advanced',
    'Pro'
  ];

  defaultSubscription = '';

  details = {
    email         : '',
    password      : '',
    subscription  : ''
  }

  ngOnInit() {
    this.defaultSubscription = this.subscriptions[1];
    console.log(this.form);
  }

  onSubmit() {
    console.log(this.form);
    this.details = {
      email         : this.form.value.email,
      password      : this.form.value.password,
      subscription  : this.form.value.subscription
    }
  }

}
