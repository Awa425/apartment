import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'apartments',
    loadComponent: () => import('./components/apartment-list/apartment-list.component').then(m => m.ApartmentListComponent)
  },
  {
    path: 'apartments/:id',
    loadComponent: () => import('./components/apartment-detail/apartment-detail.component').then(m => m.ApartmentDetailComponent)
  },
  {
    path: 'search',
    loadComponent: () => import('./components/apartment-list/apartment-list.component').then(m => m.ApartmentListComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact-form/contact-form.component').then(m => m.ContactFormComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
