import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for formGroup

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  standalone: true,  // Ensure the component is standalone
  imports: [CommonModule, ReactiveFormsModule]  // Import CommonModule and ReactiveFormsModule here
})
export class AppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appointmentDate: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Appointment Data:', this.appointmentForm.value);
      alert('Appointment Submitted!');
      this.appointmentForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}


