
import { Component, inject } from '@angular/core';
import { rxResource} from '@angular/core/rxjs-interop';

import { ProductsService } from '@products/services/products.service';
import { CardComponent } from '@products/components/card/card.component';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  imports: [CardComponent, CardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  productsResource = rxResource({
    request: () => ({ page: this.paginationService.currentPage() - 1 }),
    loader: ({ request }) => this.productsService.getProducts({
      offset: request.page * 9,
    }),
  });
}
