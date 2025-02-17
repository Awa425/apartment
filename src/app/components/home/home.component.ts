import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

interface Property {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchForm: FormGroup;
  propertyTypes = [
    { value: 'all', label: 'Tous les types' },
    { value: 'apartment', label: 'Appartement' },
    { value: 'house', label: 'Maison' },
    { value: 'villa', label: 'Villa' },
    { value: 'studio', label: 'Studio' }
  ];

  properties: any[] = [
    {
      id: 1,
      name: 'Presidential Towers',
      location: '555 W Madison St, Chicago, IL 60661',
      image: 'assets/images/properties/img3.jpg',
      bedrooms: 2,
      price: 1480
    },
    {
      id: 2,
      name: 'Luxury Apartments',
      location: '123 Lake Shore Drive, Chicago, IL 60601',
      image: 'assets/images/properties/img2.jpg',
      bedrooms: 3,
      price: 2200
    },
    {
      id: 3,
      name: 'Urban Living',
      location: '789 State Street, Chicago, IL 60605',
      image: 'assets/images/properties/img1.jpg',
      bedrooms: 1,
      price: 1200
    },
    {
      id: 4,
      name: 'Presidential Towers',
      location: '555 W Madison St, Chicago, IL 60661',
      image: 'assets/images/properties/img3.jpg',
      bedrooms: 2,
      price: 1480
    },
    {
      id: 5,
      name: 'Luxury Apartments',
      location: '123 Lake Shore Drive, Chicago, IL 60601',
      image: 'assets/images/properties/img2.jpg',
      bedrooms: 3,
      price: 2200
    },
    {
      id: 6,
      name: 'Urban Living',
      location: '789 State Street, Chicago, IL 60605',
      image: 'assets/images/properties/img1.jpg',
      bedrooms: 1,
      price: 1200
    }
  ];

  chambres: any[] = [
    {
      id: 1,
      name: 'Presidential Towers',
      location: '555 W Madison St, Chicago, IL 60661',
      image: 'assets/images/properties/img3.jpg',
      bedrooms: 2,
      price: 1480
    },
    {
      id: 2,
      name: 'Luxury Apartments',
      location: '123 Lake Shore Drive, Chicago, IL 60601',
      image: 'assets/images/properties/img2.jpg',
      bedrooms: 3,
      price: 2200
    },
    {
      id: 3,
      name: 'Urban Living',
      location: '789 State Street, Chicago, IL 60605',
      image: 'assets/images/properties/img1.jpg',
      bedrooms: 1,
      price: 1200
    },
    {
      id: 4,
      name: 'Presidential Towers',
      location: '555 W Madison St, Chicago, IL 60661',
      image: 'assets/images/properties/img3.jpg',
      bedrooms: 2,
      price: 1480
    },
    {
      id: 5,
      name: 'Luxury Apartments',
      location: '123 Lake Shore Drive, Chicago, IL 60601',
      image: 'assets/images/properties/img2.jpg',
      bedrooms: 3,
      price: 2200
    },
    {
      id: 6,
      name: 'Urban Living',
      location: '789 State Street, Chicago, IL 60605',
      image: 'assets/images/properties/img1.jpg',
      bedrooms: 1,
      price: 1200
    }
  ];

  specialOffers = [
    {
      title: 'Summer Holidays',
      image: 'assets/images/properties/img1.jpg',
      discount: '$20.0',
      period: 'Pour check-in du 01-07-2024 au 24-10-2024'
    },
    {
      title: 'Wedding Package',
      image: 'assets/images/properties/img2.jpg',
      discount: '30%',
      period: 'Pour check-in du 01-10-2014 au 31-12-2024'
    },
    {
      title: 'Meeting & Party',
      image: 'assets/images/properties/img3.jpg',
      discount: '25%',
      period: 'Pour check-in du 01-10-2014 au 30-11-2024'
    }
  ];

  vipServices = [
    {
      title: 'Fine Dining Choices',
      image: 'assets/images/properties/img4.jpg',
      description: 'Profitez d\'une expérience culinaire exceptionnelle'
    },
    {
      title: 'Pamper yourself in the Spa',
      image: 'assets/images/properties/img5.jpg',
      description: 'Détendez-vous dans notre spa luxueux'
    }
  ];

  testimonials = [
    {
      name: 'Billy Tom',
      date: '2025-02-10, 09:15',
      comment: 'Really it is a great hotel, even as all venice building looks antik but it\'s very modern and very clean from inside. Very clean, nice breakfast!!! We surely come back.'
    },
    {
      name: 'Sarah Johnson',
      date: '2025-02-08, 14:30',
      comment: 'Excellent emplacement, personnel attentionné et chambres impeccables. Une expérience inoubliable !'
    },
    {
      name: 'Marc Dubois',
      date: '2025-02-05, 11:45',
      comment: 'Service exceptionnel et vue magnifique. Je recommande vivement pour un séjour de luxe.'
    }
  ];

  currentTestimonialIndex = 0;

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setCurrentTestimonial(index: number) {
    this.currentTestimonialIndex = index;
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      location: [''],
      propertyType: ['all'],
      priceRange: ['']
    });
  }

  onSearch() {
    console.log('Search values:', this.searchForm.value);
    // Implement search logic here
  }

  getRatingArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  onPropertyClick(id: number) {
    this.router.navigate(['/apartment', id]);
  }
}
