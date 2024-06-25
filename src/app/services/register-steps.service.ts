import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterStepsService {

  private currentStepSubject = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStepSubject.asObservable();

  getCurrentStep(): number {
    return this.currentStepSubject.value;
  }

  setCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }

  nextStep(): void {
    this.currentStepSubject.next(this.currentStepSubject.value + 1);
  }

  prevStep(): void {
    if (this.currentStepSubject.value > 1) {
      this.currentStepSubject.next(this.currentStepSubject.value - 1);
    }
  }
}
