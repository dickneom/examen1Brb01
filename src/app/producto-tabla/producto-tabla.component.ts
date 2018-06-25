import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicio/tienda.service';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit {

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
  }

}
