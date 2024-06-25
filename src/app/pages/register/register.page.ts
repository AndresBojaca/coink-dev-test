import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterStepsService } from './../../services/register-steps.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  currentStep: number = 1;
  private stepSubscription!: Subscription;

  constructor(private registerStepsService: RegisterStepsService) {}

  ngOnInit() {
    // Suscripción para observar cambios en currentStep del servicio
    this.stepSubscription = this.registerStepsService.currentStep$.subscribe(step => {
      console.log('currentStep ha cambiado:', step);
      // Actualiza el currentStep local si es necesario
      this.currentStep = step;
    });
  }

  ngOnDestroy() {
    // Desuscribirse para evitar memory leaks
    if (this.stepSubscription) {
      this.stepSubscription.unsubscribe();
    }
  }

  navigateToStep(step: number) {
    this.registerStepsService.setCurrentStep(step);
  }

  finish() {
    console.log('Registro finalizado');
  }
}
