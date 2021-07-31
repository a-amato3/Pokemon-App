import { NgModule } from '@angular/core';
import { Name } from './name.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [SearchPipe, Name],
  exports: [SearchPipe, Name],
})
export class CustomPipeModule {}
