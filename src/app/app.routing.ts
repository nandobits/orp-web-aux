import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CarPreviewComponent } from './pages/previews/car/car-preview.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'car-preview/:quotationId', component: CarPreviewComponent },
    { path: '**', component: NotFoundComponent },
]
