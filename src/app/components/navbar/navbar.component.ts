import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../user/login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule],
})
export class NavbarComponent {
  readonly dialog = inject(MatDialog);
  items = [
    { id: 0, name: 'ABOUT' },
    { id: 1, name: 'SHOP' },
    { id: 2, name: 'PRODUCT' },
    { id: 3, name: 'CONNECT' },
  ];

  openLogin() {
    const dialogref = this.dialog.open(LoginComponent, {
      width: '900px',
      height: '600px',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });
  }
}
