import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
    { path: 'root', component: AppComponent },
    { path: '', pathMatch: 'full', redirectTo: 'root' },
    { path: '**', pathMatch: 'full', redirectTo: 'root' }
];
