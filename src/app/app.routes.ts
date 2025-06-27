import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';

export const routes: Routes = [
    { path:"", component: LoaderComponent },
    { path:"home", component: HomeComponent},
    { path:"register", component: RegisterComponent },
    { path:"login", component: LoginComponent }
];
