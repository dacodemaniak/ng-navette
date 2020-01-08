import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports : [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
