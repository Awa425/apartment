import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  selector: 'app-bien-form',
    imports: [
      CommonModule,ReactiveFormsModule,MatFormFieldModule,MatRadioModule,
      MatInputModule,MatButtonModule,MatCardModule,MatTabsModule,MatIconModule,MatSelectModule
    ],
  templateUrl: './bien-form.component.html',
  styleUrl: './bien-form.component.scss'
})
export class BienFormComponent {
  @Input() typeBien: string = ''; // 'appartement', 'chambre', 'bureau'
}
