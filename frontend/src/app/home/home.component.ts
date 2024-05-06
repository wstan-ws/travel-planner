import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  destinationForm!: FormGroup

  private fb = inject(FormBuilder)
  private store = inject(StoreService)
  private router = inject(Router)

  ngOnInit(): void {
      this.destinationForm = this.createDestinationForm()
  }

  next(): void {
    this.store.addDestination(this.destinationForm.value.destination)
    console.log(this.store.getTravelDetail())
    this.router.navigate(['/travel-date'])
  }
  
  private createDestinationForm(): FormGroup {
    return this.fb.group({
      destination: this.fb.control<string>("", [ Validators.required ])
    })
  }

}
