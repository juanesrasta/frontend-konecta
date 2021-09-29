import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudListComponent } from './components/solicitud-list/solicitud-list.component';
import { AddSolicitudComponent } from './components/add-solicitud/add-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    EmpleadosListComponent,
    SolicitudListComponent,
    AddSolicitudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
