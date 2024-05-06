import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-entity',
  templateUrl: './travel-entity.component.html',
  styleUrl: './travel-entity.component.css'
})
export class TravelEntityComponent implements OnInit {

  travelEntityForm!: FormGroup

  private fb = inject(FormBuilder)

  ngOnInit(): void {
    this.travelEntityForm = this.createTravelEntityForm()
  }

  next(): void {
    
  }

  private createTravelEntityForm(): FormGroup {
    return this.fb.group({
      entity: this.fb.control<string>("", [ Validators.required ])
    })
  }
}
