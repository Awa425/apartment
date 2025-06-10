import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-apartment-form',
   standalone: true,
    imports: [
      CommonModule,ReactiveFormsModule,MatFormFieldModule,MatRadioModule,
      MatInputModule,MatButtonModule,MatCardModule,MatTabsModule,MatIconModule,MatSelectModule
    ],
  templateUrl: './apartment-form.component.html',
  styleUrl: './apartment-form.component.scss'
})
export class ApartmentFormComponent {
    @Input() form!: FormGroup;
    @Output() submitForm = new EventEmitter<void>();

   imagePreviews: string[] = [];

     onSubmit() {
      this.submitForm.emit();
    }

    onFileSelected(event: any) {
    const files = event.target.files;
      if (!files || files.length === 0) {
      return;
    }
  
    if (this.imagePreviews.length + files.length > 3) {
      alert("Vous pouvez sélectionner seulement 3 images.");
      return;
    }
  
    // Parcourir les nouveaux fichiers et les ajouter à la liste
    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

}
