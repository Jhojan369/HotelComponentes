import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaComponent } from './componentes/fecha/fecha.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { Toast } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    HabitacionesComponent,
    DescripcionComponent,
    FooterComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Toast
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
