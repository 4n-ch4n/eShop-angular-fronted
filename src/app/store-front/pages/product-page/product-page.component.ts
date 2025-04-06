import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { ProductCarouselComponent } from "../../../products/components/product-carousel/product-carousel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent, ProductImagePipe],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  productsService = inject(ProductsService);
  productIdSlug: string = inject(ActivatedRoute).snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) => this.productsService.getProductByIdSlug(request.idSlug),
  })
}
