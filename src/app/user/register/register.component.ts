import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { User } from '../../models/User';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { PasswordMatchValidator } from '../../components/validators/password-match.validator';
import { UserService } from '../../services/user.service';
import { UserRegistrationRequest } from '../../models/UserRegistrationRequest';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  message: any;

  form_data: UserRegistrationRequest = new UserRegistrationRequest();
  constructor(
    private dialog: MatDialog,
    private registerDialogRef: MatDialogRef<RegisterComponent>,
    private userService: UserService
  ) {}

  //Registration Form

  registrationForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: PasswordMatchValidator() }
  );

  user: User = new User();

  //onSubmit() for registration
  onSubmit() {
    this.form_data.email = this.registrationForm.value.email as string;
    this.form_data.password = this.registrationForm.value.password as string;
    console.log(this.form_data);
    this.userService.registerUser(this.form_data).subscribe((data)=>{
      this.message = data.message;
    });

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
