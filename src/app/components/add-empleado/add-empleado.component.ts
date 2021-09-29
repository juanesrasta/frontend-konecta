import { Component, OnInit } from '@angular/core';

import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

	empleado: Empleado = {
		fecha_ingreso: '',
		nombre: '',
		salario: ''
	};
  
	submitted = false;
	
	constructor(private empleadoService: EmpleadoService) { }

	ngOnInit(): void {}

	guardarEmpleado(): void {
		const data = {
			fecha: this.empleado.fecha_ingreso,
			nombre: this.empleado.nombre,
			salario: this.empleado.salario
		};

		this.empleadoService.create(data)
			.subscribe(
			response => {
				console.log(response);
				this.submitted = true;
			},
			error => {
				console.log(error);
			}
		);
	}

	nuevoEmpleado(): void {
		
		this.submitted = false;
		
		this.empleado = {
			fecha_ingreso: '',
			nombre: '',
			salario: ''
		
		};
	}
	
}
