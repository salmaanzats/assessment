import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'matific-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss'
})
export class HeaderLayoutComponent implements OnInit {

  firstName: string;

  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.firstName =  this.authService.firstName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
