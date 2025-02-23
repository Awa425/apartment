import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApartmentDetailComponent } from './components/apartment-detail/apartment-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'user-profile', 
    component: ProfileComponent
  },
  { 
    path: 'user-edit-profile', 
    component: ProfileEditComponent
  },
  { 
    path: 'apartment/:id', 
    component: ApartmentDetailComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
