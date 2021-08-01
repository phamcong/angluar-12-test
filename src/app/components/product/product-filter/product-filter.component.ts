import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { startWith } from 'rxjs/operators'
import { ProductService } from '../product.service'

interface DefaultSltOption {
  [key: string]: boolean
}

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
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
  defaultAgeRangeSlt: DefaultSltOption = {}

  constructor(
    fb: FormBuilder,
    private productService: ProductService
  ) {
    const selectStatusMap = new Map(this.ageRangeSltItems.map(item => [item.label, item.selected]))
    this.defaultAgeRangeSlt = Object.fromEntries(selectStatusMap)
    this.ageRangeSelection = fb.group(this.defaultAgeRangeSlt)
  }

  ngOnInit(): void {
    this.ageRangeSelection.valueChanges
      .pipe(startWith(this.defaultAgeRangeSlt))
      .subscribe(value => {
        const sltAgeRanges = this.ageRangeSltItems
          .filter(item => value[item.label])
          .map(item => item.ageRange as [number, number])
        this.productService.productFilterBSub.next({
          ageRanges: sltAgeRanges
        })
      })
  }
}
