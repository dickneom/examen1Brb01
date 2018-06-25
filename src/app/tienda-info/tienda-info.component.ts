import { Component, OnInit } from '@angular/core';
import { Tienda } from '../modelo/tienda';
import { TiendaService } from '../servicio/tienda.service';

@Component({
  selector: 'app-tienda-info',
  templateUrl: './tienda-info.component.html',
  styleUrls: ['./tienda-info.component.css']
})
export class TiendaInfoComponent implements OnInit {

  // tienda: Tienda;

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    // this.tienda = this.tiendaService.getTienda(2);
    // this.tienda = this.tiendaService.getTiendaSeleccionada();
    // console.log('TiendaInfo tienda.nombres: ' + this.tienda.nombres);
  }

}
