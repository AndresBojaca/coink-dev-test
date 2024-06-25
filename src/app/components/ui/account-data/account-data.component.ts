import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatePickerModalComponent } from '../date-picker-modal/date-picker-modal.component';
import { RegisterStepsService } from './../../../services/register-steps.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit {
  accountDataForm: FormGroup;
  hidePin: boolean = true;
  hideConfirmPin: boolean = true;

  //Stepper
  currentStep: number = 2;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private RegisterStepsService: RegisterStepsService
  ) {
    this.accountDataForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      documentIssueDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      securityPin: ['', Validators.required],
      confirmPin: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Cualquier lógica de inicialización si es necesaria
  }

  togglePinVisibility() {
    this.hidePin = !this.hidePin;
  }

  toggleConfirmPinVisibility() {
    this.hideConfirmPin = !this.hideConfirmPin;
  }

  async openDatePicker(controlName: string) {
    const modal = await this.modalController.create({
      component: DatePickerModalComponent,
      componentProps: {
        selectedDate: this.accountDataForm.get(controlName)?.value
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.accountDataForm.get(controlName)?.setValue(result.data.selectedDate);
      }
    });

    return await modal.present();
  }

  onSubmit() {
    if (this.accountDataForm.valid) {
      console.log(this.accountDataForm.value);
      //Stepper
      this.RegisterStepsService.setCurrentStep(this.currentStep);
      this.RegisterStepsService.nextStep();
    } else {
      console.log('Formulario no válido');
    }
  }

}
