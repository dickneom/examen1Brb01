import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TiendaFormComponent } from './tienda-form/tienda-form.component';
import { TiendaInfoComponent } from './tienda-info/tienda-info.component';
import { TiendaBotonesComponent } from './tienda-botones/tienda-botones.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';

import { TiendaService } from './servicio/tienda.service';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { NgPrimeModule } from './ng-prime/ng-prime.module';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    TiendaFormComponent,
    TiendaInfoComponent,
    TiendaBotonesComponent,
    ProductoFormComponent,
    ProductoTablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    NgMaterialModule,
    NgPrimeModule
  ],
  providers: [TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
