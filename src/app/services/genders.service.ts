import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  constructor() { }

  getGenders(): Observable<string[]> {
    // Simulamos una llamada a un API con un delay de 2 segundos
    const genders = ['Masculino', 'Femenino', 'Otro'];
    return of(genders).pipe(delay(1000));
  }
}
