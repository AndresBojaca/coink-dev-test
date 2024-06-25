import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {

  isChecked = false;
  isDisabled = true;

  constructor(private router: Router) {}
  ngOnInit() {}

  handleCheckboxChange(event: any) {
    this.isChecked = event.detail.checked;
    this.isDisabled = !this.isChecked;
  }

  onSubmit() {
    if (!this.isDisabled) {
      // Lógica para enviar el formulario
      this.router.navigate(['/dashboard']);
    }
  }

}
