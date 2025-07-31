import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() before!: string;
  @Input() logo!: string;
  @Input() image!: string;
  @Input() in_stock!: boolean;
  @Input() on_sale!: boolean;
}
