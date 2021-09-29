import { Component, OnInit } from '@angular/core';

import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})

export class EmpleadosListComponent implements OnInit {

	empleados?: Empleado[];
	
	currentEmpleado: Empleado = {};
	
	currentIndex = -1;
	
	nombre = '';
	
	constructor(private empleadoService: EmpleadoService) { }

	ngOnInit(): void {
		
		this.retrieveEmpleados();
		
	}
	
	retrieveEmpleados(){
		
		this.empleadoService.getAll()
			.subscribe(
				data => {
					this.empleados = data;
					console.log(data[0]);
				},
				error => {
					console.log(error);
				}
			);
		
	}	
	
	refreshList(): void {
		this.retrieveEmpleados();
		this.currentEmpleado = {};
		this.currentIndex = -1;
	}
	
	setActiveEmpleado(empleado: Empleado, index: number): void {
		this.currentEmpleado = empleado;
		this.currentIndex = index;
	}
	
}
