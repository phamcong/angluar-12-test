import { Component, OnInit } from '@angular/core'
import { combineLatest, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ProductListItem } from 'src/app/shared/models/product'
import { compareTwoArray } from 'src/app/shared/shared.util'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productListItems$!: Observable<ProductListItem[]>

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productListItems$ = combineLatest([
      this.productService.allProductLItems$,
      this.productService.productFilter$
    ]).pipe(
      map(([products, filter]) => {
        const sltAgeRanges = filter.ageRanges
        if (!sltAgeRanges || !sltAgeRanges.length) return products

        return products
          // Filter only product with ageRange in sltAgeRanges 
          .filter(product => sltAgeRanges.find(ageRange => {
            if (!product.ageRange) return true
            return compareTwoArray(ageRange, product.ageRange)
          }))
      })
    )
  }

}
