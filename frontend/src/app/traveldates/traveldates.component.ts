import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveldates',
  templateUrl: './traveldates.component.html',
  styleUrl: './traveldates.component.css'
})
export class TraveldatesComponent implements OnInit {

  travelDateForm!: FormGroup
  minDate: Date = new Date()

  private fb = inject(FormBuilder)
  private store = inject(StoreService)
  private router = inject(Router)

  ngOnInit(): void {
    this.travelDateForm = this.createTravelDateForm()
  }

  next(): void {
    this.store.addtravelDates(this.travelDateForm.value.startDate, this.travelDateForm.value.endDate)
    console.log(this.store.getTravelDetail())
    this.router.navigate(['/travel-entity'])
  }

  private createTravelDateForm(): FormGroup {
    return this.fb.group({
      startDate: this.fb.control<Date | null>(null, [ Validators.required ]),
      endDate: this.fb.control<Date | null>(null, [ Validators.required ])
    })
  }
}
