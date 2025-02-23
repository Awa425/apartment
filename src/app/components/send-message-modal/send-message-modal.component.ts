import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-send-message-modal',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './send-message-modal.component.html',
  styleUrl: './send-message-modal.component.scss'
})
export class SendMessageModalComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      moveInDate: ['', Validators.required],
      phone: [''],
      scheduleTour: [false],
      requestApplication: [false],
      confirmAvailability: [false],
      customMessage: [false],
      emailUpdates: [false],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
