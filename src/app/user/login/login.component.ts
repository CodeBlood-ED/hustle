import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { UserLoginRequest } from '../../models/UserLoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly dialog = inject(MatDialog);
  userLoginRequestObject = new UserLoginRequest();

  constructor(
    private userService: UserService,
    private LoginDialogRef: MatDialogRef<LoginComponent>
  ) {}

  user = new User();

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    this.userLoginRequestObject.email = this.loginForm.value.email;
    this.userLoginRequestObject.password = this.loginForm.value.password;
    this.userService.userlogin(this.userLoginRequestObject).subscribe((data)=>{
      console.log(data.responsepayload);
      this.LoginDialogRef.close();
    });
  }

  openRegisterDialog() {
    this.LoginDialogRef.close();
    this.LoginDialogRef.afterClosed().subscribe(() => {
      this.dialog.open(RegisterComponent, {
        width: '900px',
        height: '600px',
        maxWidth: '100vw',
        maxHeight: '100vh',
      });
    });
  }
}
