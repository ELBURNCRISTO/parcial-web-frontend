import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Empresa{
  id?: number;
  nombre: string;
  nit: string;
  ciudad: string;
  sector: string;}

@Injectable({ providedIn: 'root' })
export class EmpresaService{
  private apiUrl = 'http://localhost:8080/api/empresas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);}

  crear(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa);}
}