import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  currentPage = input<number>(1);
  pages = input(0);

  activePage = linkedSignal(() => this.currentPage());

  getPagesList = computed(() => Array.from({ length: this.pages() }, (_, i) => i + 1));
}
