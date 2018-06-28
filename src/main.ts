// Para utilizar BOOTSTRAP
// Agregado al index.html, el css de bootstrap
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
//      integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
// Instalar ng-bootstrap
// npm install --save @ng-bootstrap/ng-bootstrap
// En app.module.ts importar el modulo NgbModule y agregarlo a los imports
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// @NgModule({
//   declarations: [AppComponent, ...],
//   imports: [NgbModule.forRoot(), ...],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
// }

// Para utilizar angular-material
// Instalar angular-material
// npm install --save @angular/material @angular/cdk
// npm install --save @angular/animations
// npm install --save hammerjs
// En app.modules.ts importar BrowserAnimationsModule
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// imports: [BrowserAnimationsModule],
// Crear el modulo NgMaterial e importar los modulos de angular-material que se requieren
// Importrar el modulo NgMaterial en app.module.ts
// Agregar un tema predefinido en styles.css
// @import "~@angular/material/prebuilt-themes/indigo-pink.css";

// Para utilizar primeNG
// Instalar PrimeNG
// npm install primeng --save
// npm install primeicons --save
// npm install @angular/animations --save
// Agregar las dependencias en la session styles de  angular.json (en versiones anteriores angular-cli.json)
// de acuerdo a la documentacion tambien
// hay que acerlo en index.html (Creo que en uno de los dos es suficiente, hay que probar)
// <link rel="stylesheet" type="text/css" href="/node_modules/primeicons/primeicons.css" />
// <link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/themes/omega/theme.css" />
// <link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/primeng.min.css" />
// Con estos pasos me sale que no se puede localizar los archivos indicados.
// Para solucionar esto:
// instalar los modulos arriba indicados, se puede agregar el modulo:
// npm install font-awesome --save
// y agregue en la seccion styles de angular.json
// "styles": [
//   "src/styles.css",
//   "node_modules/font-awesome/css/font-awesome.min.css",
//   "node_modules/primeng/resources/primeng.min.css",
//   "node_modules/primeng/resources/themes/darkness/theme.css"
// ],
// Si se quiere utilizar los iconos de prime tambien agregar:
// "node_modules/primeicons/primeicons.css",

// Comunicacion entre componentes: Padre-Hijo / Hijo-Padre
// Importar desde @angular/core: Input, Output, EventEmitter
// Padre-Hijo: @Input
//    En el hijo se agrega el decodador @Input antes de definira la variable.
//    En el "html" del padre, al llamar al componente hijo se indica la variable que se quiere pasar.
//
// Hijo-Padre: @Output, con el EventEmitter

// SERVICIOS
// Crear el servicio
//  ng g service nombre-servicio
// importarlo en app.module.ts
// agregarlo al arreglo de imports


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Generar modelo:
// ng generate class tienda
// ng generate class producto
// ng generate class tiendas (Para simular datos ingresados)
// ng generate service tienda
// Generar los componentes:
// ng generate component carrusel
// ng generate component tienda-form
// ng generate component tienda-botones
// ng generate component tienda-info
// ng generate component producto-form
// ng generate component producto-tabla
