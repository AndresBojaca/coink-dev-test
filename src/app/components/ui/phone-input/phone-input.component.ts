import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent {
  public numero: string = '';
  currentStep: number = 1;
  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  constructor(
    private toastController: ToastController,
    private registerStepsService: RegisterStepsService
  ) {}

  delete() {
    this.numero = this.numero.slice(0, -1);
  }

  ontapButton(number: string) {
    if (this.numero.length < 11) { // Limita la entrada a 11 caracteres
      this.numero += number;
    }
  }

  async onSubmit() {
    if (this.isValidPhoneNumber(this.numero)) {
      this.registerStepsService.nextSegment();
    } else {
      await this.presentErrorToast('Número de teléfono inválido');
    }
  }

  isValidPhoneNumber(number: string): boolean {
    // Validaciones realizadas:
    // 1. Se verifica que la longitud del número sea al menos 10 caracteres.
    // 2. Otras validaciones podrían incluir el formato específico del número según el país, pero por ahora solo se valida la longitud mínima.
    return number.length >= 10;
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger',
      position: 'bottom',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  }

  onPaste(event: ClipboardEvent) {
    // Prevenir la acción de pegado si el campo ya tiene el máximo de caracteres permitidos
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData.getData('text');

    // Validar si el texto pegado contiene solo números
    if (/^\d+$/.test(pastedText)) {
      // Limitar la longitud si se pega texto
      const maxLength = 11; // Longitud máxima permitida
      const currentLength = this.numero.length;
      const remainingLength = maxLength - currentLength;
      
      if (pastedText.length <= remainingLength) {
        this.numero = this.numero + pastedText;
      } else {
        this.numero = this.numero + pastedText.substring(0, remainingLength);
      }
    } else {
      // Mostrar toast de error
      this.presentErrorToast('Solo se permiten números al pegar');
    }
  }

  formatPhoneNumber(phoneNumber: string): string {
    if (phoneNumber.length > 3) {
      return phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3);
    }
    return phoneNumber;
  }
  
  

}
