import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicio/tienda.service';
import { Tienda } from '../modelo/tienda';

@Component({
  selector: 'app-tienda-botones',
  templateUrl: './tienda-botones.component.html',
  styleUrls: ['./tienda-botones.component.css']
})
export class TiendaBotonesComponent implements OnInit {

  datos: Tienda[];

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    this.datos = this.tiendaService.getTiendas();
  }

  seleccionar(dato: Tienda) {
    // if (dato === undefined) {
    //   console.log('TiendaBotones seleccionar tienda indefinida');
    // } else {
    //   console.log('TiendaBotones seleccionar (no indefinido): ' + dato.nombres);
    // }
    // console.log('TiendaBotones seleccionar boton presionado: id: ' + dato.id);
    // console.log('TiendaBotones seleccionar boton presionado: nombres: ' + dato.nombres);
    this.tiendaService.imprimirTiendas();
    this.tiendaService.setTiendaSeleccionada(dato);
  }
}
