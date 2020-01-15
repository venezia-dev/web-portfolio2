import { NgModule } from '@angular/core'; 

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatBadgeModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatBadgeModule
  ]
  
})

export class MaterialModule { }