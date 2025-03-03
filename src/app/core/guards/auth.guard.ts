import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const LoggedData = sessionStorage.getItem('user');
  if (LoggedData != null) {
    return true
  } else {
    router.navigate(['/auth'])
    return false;
  }

};
