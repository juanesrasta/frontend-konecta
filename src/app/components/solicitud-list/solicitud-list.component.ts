import { Component, OnInit } from '@angular/core';

import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

	solicitudes?: Solicitud[];
	
	currentSolicitud: Solicitud = {};
	
	currentIndex = -1;
	
	nombre = '';
	
	id_emp: any;
	
	constructor(private solicitudService: SolicitudService) { }

	ngOnInit(): void {
		
		this.retrieveSolicitud();
		this.retrieveEmpleados();
		
	}
	
	retrieveSolicitud(){
		
		this.solicitudService.getAll()
			.subscribe(
				data => {
					this.solicitudes = data;
				},
				error => {
					console.log(error);
				}
			);
		
	}	
	
	refreshList(): void {
		this.retrieveSolicitud();
		this.currentSolicitud = {};
		this.currentIndex = -1;
	}
	
	setActiveSolicitud(solicitud: Solicitud, index: number): void {
		this.currentSolicitud = solicitud;
		this.currentIndex = index;
		//this.id_emp = solicitud.id_emp;
	}
	
	
	//////////////////GUARDAR/////////////////////
	solicitud2: Solicitud = {
		codigo: '',
		descripcion: '',
		resumen: '',
		id_emp: '',
	};
	
	submitted = false;
	
	empleados: any;
	
	retrieveEmpleados(){
		
		this.solicitudService.getEmployee()
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
	
	guardarSolicitud(): void {
		const data = {
			codigo: this.solicitud2.codigo,
			descripcion: this.solicitud2.descripcion,
			resumen: this.solicitud2.resumen,
			id_emp: this.id_emp
		};

		this.solicitudService.create(data)
			.subscribe(
			response => {
				this.submitted = true;
				this.retrieveSolicitud();
				this.nuevaSolicitud();
			},
			error => {
				console.log(error);
			}
		);
		
	}

	
	nuevaSolicitud(): void {
		
		this.submitted = false;
		
		this.solicitud2 = {
			codigo: '',
			descripcion: '',
			resumen: '',
			id_emp: '',
		};
	}

}
