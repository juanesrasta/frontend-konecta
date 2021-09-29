import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empleado } from '../models/empleado.model';

const baseUrl = 'http://localhost/backend-konecta/public';

@Injectable({
	providedIn: 'root'
})

export class EmpleadoService {

	constructor(private http: HttpClient) { }
	
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	} 
  
	getAll(): Observable<Empleado[]> {
		return this.http.get<Empleado[]>(baseUrl+'/empleado');
	}

	create(data: any): Observable<any> {
		return this.http.post(baseUrl+'/empleado/create', JSON.stringify(data));
	}  
	
}
