import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'matific-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  router = inject(Router);

  goToRoot() {
    this.router.navigate(['/']);
  }
}
