import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RegisterStepsService } from './../../../services/register-steps.service';
import { DocumentTypesService } from 'src/app/services/document-types.service';
import { GenderService } from 'src/app/services/genders.service';

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
  //Flags
  isLoadingGenders: boolean = false;
  isLoadingDocumentTypes:boolean = false;

  genders: any[] = [];
  documentTypes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private RegisterStepsService: RegisterStepsService,
    private DocumentTypesService: DocumentTypesService,
    private GenderService: GenderService
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

  ngOnInit(): void {
    this.getDocumentTypes();
    this.loadGenders();
  }

  getDocumentTypes(): void {
    this.DocumentTypesService.getDocumentTypes()
      .subscribe(
        (data) => {
          console.log(data);
          
          this.documentTypes = data;
          this.isLoadingDocumentTypes = false;
          console.log('Tipos de documentos:', this.documentTypes);
        },
        (error) => {
          console.error('Error al obtener tipos de documentos:', error);
          this.isLoadingDocumentTypes = false;
        }
      );
  }

  loadGenders() {
    this.GenderService.getGenders().subscribe(genders => {
      this.genders = genders;
      this.isLoadingGenders = false;
    });
  }

  togglePinVisibility() {
    this.hidePin = !this.hidePin;
  }

  toggleConfirmPinVisibility() {
    this.hideConfirmPin = !this.hideConfirmPin;
  }

  onSubmit() {
    if (this.accountDataForm.valid) {
      console.log(this.accountDataForm.value);
      //Stepper
      this.RegisterStepsService.nextSegment();
    } else {
      console.log('Formulario no válido');
    }
  }

}
