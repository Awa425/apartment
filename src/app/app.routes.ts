import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApartmentDetailComponent } from './components/apartment-detail/apartment-detail.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
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
