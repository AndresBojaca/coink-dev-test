import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterStepsService {

  private segments: string[] = ['phone-section', 'data-section', 'info-section'];
  private selectedSegmentIndex = new BehaviorSubject<number>(0);
  selectedSegment$ = this.selectedSegmentIndex.asObservable();

  constructor(private router: Router) {}

  prevSegment() {
    if (this.selectedSegmentIndex.value > 0) {
      this.selectedSegmentIndex.next(this.selectedSegmentIndex.value - 1);
    }
    if(this.segments[this.selectedSegmentIndex.value] === 'phone-section'){
      this.router.navigate(['/home']);
    }
  }

  nextSegment() {
    if (this.selectedSegmentIndex.value < this.segments.length - 1) {
      this.selectedSegmentIndex.next(this.selectedSegmentIndex.value + 1);
    }
  }

  getSelectedSegment() {
    return this.segments[this.selectedSegmentIndex.value];
  }
}
