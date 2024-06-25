import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

//Components
import { AccountDataComponent } from 'src/app/components/ui/account-data/account-data.component';
import { InfoComponent } from 'src/app/components/ui/info/info.component';
import { SectionHeaderComponent } from 'src/app/components/ui/section-header/section-header.component';
import { PhoneInputComponent } from 'src/app/components/ui/phone-input/phone-input.component';
import { CoinkButtonSharedModule } from 'src/app/shared/coink-button-shared.module';
import { HeaderComponent } from 'src/app/components/ui/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    CoinkButtonSharedModule
  ],
  declarations: [
    RegisterPage,
    AccountDataComponent,
    SectionHeaderComponent,
    PhoneInputComponent,
    HeaderComponent,
    InfoComponent
  ],
})
export class RegisterPageModule {}
