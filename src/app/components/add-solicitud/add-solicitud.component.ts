import { Component, OnInit, Input } from '@angular/core';

import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-solicitud',
  templateUrl: './add-solicitud.component.html',
  styleUrls: ['./add-solicitud.component.css']
})
export class AddSolicitudComponent implements OnInit {
	
	solicitud: Solicitud = {
		codigo: '',
		descripcion: '',
		resumen: '',
		id_emp: '',
	};

	submitted = false;
	
	@Input() id_emp: any;
	
	constructor(private solicitudService: SolicitudService) { }

	ngOnInit(): void {}

	guardarSolicitud(): void {
		const data = {
			codigo: this.solicitud.codigo,
			descripcion: this.solicitud.descripcion,
			resumen: this.solicitud.resumen,
			id_emp: this.id_emp
		};

		this.solicitudService.create(data)
			.subscribe(
			response => {
				console.log(response);
				this.submitted = true;
				//this.nuevaSolicitud();
			},
			error => {
				console.log(error);
			}
		);
		
	}

	nuevaSolicitud(): void {
		
		this.submitted = false;
		
		this.solicitud = {
			codigo: '',
			descripcion: '',
			resumen: '',
			id_emp: '',
		};
	}

}
