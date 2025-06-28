import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/User';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private dialog: MatDialog,
    private registerDialogRef: MatDialogRef<RegisterComponent>
  ) {}

  //Registration Form
  registrationForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  user: User = new User();

  //onSubmit() for registration
  onSubmit() {
    this.user = this.registrationForm.value as User;
  }

  openLoginDialog() {
    this.registerDialogRef.close();
    this.registerDialogRef.afterClosed().subscribe(() => {
      this.dialog.open(LoginComponent, {
        width: '900px',
        height: '600px',
        maxWidth: '100vw',
        maxHeight: '100vh',
      });
    });
  }
}
