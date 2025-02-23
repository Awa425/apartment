import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-property-form',
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatRadioModule,
    MatInputModule,MatButtonModule,MatCardModule,MatTabsModule,MatIconModule,MatSelectModule],
  templateUrl: './property-form.component.html',
  styleUrl: './property-form.component.scss'
})
export class PropertyFormComponent {
  propertyFields = [
    { label: 'Titre', type: 'text', },
    { label: 'Adresse', type: 'text' },
    { label: 'Superficie', type: 'number', suffix: 'm²' },
    { label: 'Nombre de pièces', type: 'number', suffix: 'pièces' },
    { label: 'Étage', type: 'number' },
    { label: 'Mensualité', type: 'number' },
    { label: 'Caution', type: 'number', suffix: 'mois' },
    { label: 'Date de Disponibilité', type: 'date' },
    { label: 'Durée du bail', type: 'text' }
  ];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      console.log(input.files);
    }
  }
}
