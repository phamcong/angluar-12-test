import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { PageEvent } from '@angular/material/paginator'

interface DefaultSltOption {
  [key: string]: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageEvent!: PageEvent
  ageRangeSltItems = [
    { label: '< 3 months', ageRange: [0, 3], selected: true },
    { label: '3 - 6 months', ageRange: [3, 6], selected: false },
    { label: '6 - 12 months', ageRange: [6, 12], selected: false },
    { label: '1 - 3 years', ageRange: [12, 36], selected: false },
    { label: '3 - 6 years', ageRange: [36, 72], selected: false },
    { label: '6 - 9 years', ageRange: [72, 108], selected: false },
    { label: '9 - 15 years', ageRange: [108, 180], selected: false }
  ]
  ageRangeSelection!: FormGroup
  toppings!: FormGroup

  constructor(fb: FormBuilder) {
    // Set default selection status of each item
    const defaultSltOption: DefaultSltOption = {}
    this.ageRangeSltItems.forEach(item => defaultSltOption[item.label] = item.selected)
    this.ageRangeSelection = fb.group(defaultSltOption)
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    })

  }

  ngOnInit(): void {
  }

}
