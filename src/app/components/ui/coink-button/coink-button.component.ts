import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coink-button',
  templateUrl: './coink-button.component.html',
  styleUrl: './coink-button.component.scss'
})
export class CoinkButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: string = 'button';
  @Input() variant: string = 'primary'; //Color por defecto
  @Input() isDisabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
