import { Component } from '@angular/core';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedSegment!: string;

  constructor(public registerStepsService: RegisterStepsService) {}

  prevSegment() {
    this.registerStepsService.prevSegment();
  }
}
