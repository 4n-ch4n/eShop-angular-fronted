
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ProductsService } from '@products/services/products.service';
import { CardComponent } from '@products/components/card/card.component';

@Component({
  selector: 'app-home-page',
  imports: [CardComponent, CardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.productsService.getProducts({})
  });
}
