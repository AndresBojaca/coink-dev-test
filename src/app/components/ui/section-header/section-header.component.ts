import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent  implements OnInit {

  @Input() imgSrc: string = 'assets/Oink-M.svg';
  @Input() imgAlt: string = '';
  @Input() headerText: string = '';
  @Input() subText: string = '';

  constructor() { }

  ngOnInit() {}

}
