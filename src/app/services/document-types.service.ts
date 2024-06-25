import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {
  private apiUrl = 'https://api.bancoink.biz/qa/signup/documentTypes';
  private apiKey = '030106';

  constructor(private http: HttpClient) { }

  // Método para obtener tipos de documentos
  getDocumentTypes(): Observable<any[]> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}`;
    // Realiza la solicitud GET y maneja cualquier error
    return this.http.get<any[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend devolvió un código de respuesta sin éxito
      console.error(
        `Código de error ${error.status}, ` +
        `mensaje: ${error.error}`);
    }
    // Devuelve un observable con un mensaje de error
    return throwError('Algo malo sucedió; inténtelo de nuevo más tarde.');
  }
}
