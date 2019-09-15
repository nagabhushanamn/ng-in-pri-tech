import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  isOpen=false;
  reviewForm;
  @Output() newReview = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: ['5'],
      author: ['Nag@mail.com', [Validators.required]],
      body: ['']
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.reviewForm.valid) {
      this.newReview.emit(this.reviewForm.value)
    }
  }
  toggleForm(){
    this.isOpen=!this.isOpen;
  }

}
