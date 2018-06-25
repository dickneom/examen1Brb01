import { Component, OnInit } from '@angular/core';
import { Tienda } from '../modelo/tienda';
import { TiendaService } from '../servicio/tienda.service';

@Component({
  selector: 'app-tienda-form',
  templateUrl: './tienda-form.component.html',
  styleUrls: ['./tienda-form.component.css']
})
export class TiendaFormComponent implements OnInit {

  tienda: Tienda;

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    this.tienda = this.tiendaService.nuevaTienda();
  }

  agregarTienda() {
    // console.log('TiendaForm agregarTienda: nombres: ' + this.tienda.nombres);
    this.tiendaService.agregarTienda(this.tienda);
    this.tienda = this.tiendaService.nuevaTienda();
  }
}
