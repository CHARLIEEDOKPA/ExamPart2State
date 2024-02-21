import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-satisfaction',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './satisfaction.component.html',
  styleUrl: './satisfaction.component.css'
})
export class SatisfactionComponent {

  formRate: FormGroup
  rate = 0

  constructor() {
    const PATTERN = '[1-9]'
    this.formRate = new FormGroup({
      rate: new FormControl('',[Validators.pattern(PATTERN)])
    })
  }
  
  addRate() {
    this.rate = this.formRate.valid ? Number(this.formRate.value.rate) : -1
  }

}
