import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReceitas } from '../interfaces/receitas';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private apiUrl = 'http://localhost:3000/receita';

  constructor(private http: HttpClient) { }

  getAllReceitas() {
    return this.http.get<Array<IReceitas>>(this.apiUrl);
  }

  getReceita(id: string) {
    return this.http.get<IReceitas>(`${this.apiUrl}/${id}`) 
  }

  deleteReceita(id: number) {
    return this.http.delete<IReceitas>(`${this.apiUrl}/${id}`)
  }
}
