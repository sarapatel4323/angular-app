import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add CommonModule here
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      feedback: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      alert('Thank you for your feedback!');
      console.log(this.feedbackForm.value);
      this.feedbackForm.reset();
    }
  }
}
