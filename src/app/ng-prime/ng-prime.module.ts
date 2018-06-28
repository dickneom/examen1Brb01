import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { InputTextModule } from 'primeng/inputtext';
// import { TableModule } from 'primeng/table';
// import { InputTextModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
// import { ButtonModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    // MatAutocompleteModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    PanelModule
  ],
  declarations: [],
  exports: [
    // MatAutocompleteModule
    InputTextModule,
    TableModule,
    ButtonModule,
    PanelModule
  ]
})
export class NgPrimeModule { }
