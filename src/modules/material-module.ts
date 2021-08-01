import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}
