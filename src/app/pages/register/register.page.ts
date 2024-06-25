import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  selectedSegment!: string;
  private subscription!: Subscription;

  constructor(private RegisterStepsService: RegisterStepsService) {}

  ngOnInit() {
    this.subscription = this.RegisterStepsService.selectedSegment$.subscribe(index => {
      this.selectedSegment = this.RegisterStepsService.getSelectedSegment();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  prevSegment() {
    this.RegisterStepsService.prevSegment();
  }

  nextSegment() {
    this.RegisterStepsService.nextSegment();
  }

}
