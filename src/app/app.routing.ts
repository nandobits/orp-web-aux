import { Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
        ]
    },
    { path: 'ingresar', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
]
