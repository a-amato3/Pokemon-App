import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatIconModule, MatProgressSpinnerModule],
  exports: [MatIconModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
