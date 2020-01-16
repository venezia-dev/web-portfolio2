import { NgModule } from '@angular/core'; 

import {
  MatButtonModule, 
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule
  ],
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule
  ]
  
})

export class MaterialModule { }