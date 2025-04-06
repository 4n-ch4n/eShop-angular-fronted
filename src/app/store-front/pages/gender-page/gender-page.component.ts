import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { CardComponent } from '@products/components/card/card.component';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-gender-page',
  imports: [CardComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  route = inject(ActivatedRoute);
  producstService = inject(ProductsService);

  gender = toSignal<string>(this.route.params.pipe(map(({ gender }) => gender)));

  productsResource = rxResource({
    request: () => ({ gender: this.gender() }),
    loader: ({ request }) => this.producstService.getProducts({ gender: request.gender }),
  })
}
