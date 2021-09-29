import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Solicitud } from '../models/solicitud.model';

const baseUrl = 'http://localhost/backend-konecta/public';


@Injectable({
	providedIn: 'root'
})

export class SolicitudService {

  constructor(private http: HttpClient) { }
  
  alldata: any;
  
  httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	} 
  
	getAll(): Observable<Solicitud[]> {
		this.alldata = this.http.get<Solicitud[]>(baseUrl+'/solicitud');
		return this.alldata;
	}

	create(data: any): Observable<any> {
		return this.http.post(baseUrl+'/solicitud/create', JSON.stringify(data));
	}  
	
	getEmployee(): Observable<Solicitud[]> {
		return this.http.get<Solicitud[]>(baseUrl+'/empleado');
	}
	
}
