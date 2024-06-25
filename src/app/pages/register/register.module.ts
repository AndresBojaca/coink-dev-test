import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { PhoneInputComponent } from '../../components/ui/phone-input/phone-input.component';
import { AccountDataComponent } from '../../components/ui/account-data/account-data.component';
import { HeaderComponent } from '../../components/ui/header/header.component';
import { DatePickerModalComponent } from '../../components/ui/date-picker-modal/date-picker-modal.component';
import { InfoComponent } from 'src/app/components/ui/info/info.component';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterPage,
    PhoneInputComponent,
    HeaderComponent,
    AccountDataComponent,
    DatePickerModalComponent,
    InfoComponent
  ],
  providers: [RegisterStepsService]
})
export class RegisterPageModule {}
