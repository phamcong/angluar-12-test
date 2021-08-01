import { Component, Input, OnInit } from '@angular/core'
import { ProductListItem } from 'src/app/shared/models/product'

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product!: ProductListItem

  constructor() { }

  ngOnInit(): void {
  }

}
