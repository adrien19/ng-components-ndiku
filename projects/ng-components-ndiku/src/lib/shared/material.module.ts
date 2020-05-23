import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

const importedModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
];

@NgModule({
  imports: importedModules,

  exports: importedModules,
})
export class MaterialModule {}
