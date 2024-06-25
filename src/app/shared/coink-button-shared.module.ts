// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { CoinkButtonComponent } from '../components/ui/coink-button/coink-button.component';

@NgModule({
  declarations: [CoinkButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CoinkButtonComponent]
})
export class CoinkButtonSharedModule { }
