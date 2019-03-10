import { Routes } from '@angular/router';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list-customer' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-customer' }
];
