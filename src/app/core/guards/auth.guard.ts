import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

    const router = inject(Router) as Router;
    const authService = inject(AuthService);

    const permission = route.data ? route.data['roleClaimType'] : null;


    if (!authService.isAuthenticated) {
        router.navigate(['login']);
        return false;
    }

    return true;
};
