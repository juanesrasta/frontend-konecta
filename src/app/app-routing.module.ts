import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';

import { AddSolicitudComponent } from './components/add-solicitud/add-solicitud.component';
import { SolicitudListComponent } from './components/solicitud-list/solicitud-list.component';

const routes: Routes = [
	{ path: '', redirectTo: 'empleados', pathMatch: 'full' },
	{ path: 'empleados', component: EmpleadosListComponent },
	{ path: 'add', component: AddEmpleadoComponent },
	{ path: 'solicitudes', component: SolicitudListComponent },
	{ path: 'solicitudes/add', component: AddSolicitudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
