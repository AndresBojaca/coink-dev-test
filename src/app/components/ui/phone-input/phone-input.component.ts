import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent {
  public numero: string = '';
  currentStep: number = 1;
  constructor(private RegisterStepsService: RegisterStepsService) {}

  delete() {
    this.numero = this.numero.slice(0, -1);
  }

  ontapButton(number: string) {
    if (this.numero.length < 11) { // Limita la entrada a 11 caracteres
      this.numero += number;
    }
  }

  onSubmit() {
    this.RegisterStepsService.setCurrentStep(this.currentStep);
    this.RegisterStepsService.nextStep();
  }
}
