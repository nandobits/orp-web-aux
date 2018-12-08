import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/* Routing */
import { appRoutes } from './app.routing';

/* Custom Modules */
import { SharedModule } from './modules/shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';

/* Services */
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import { HelperService } from './services/helper.service';
import { QuotationService } from './services/quotation.service';
import { PolicyService } from './services/policy.service';

/* Components */
import { AppComponent } from './app.component';

/* Pages */
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarPreviewComponent } from './pages/previews/car/car-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    CarPreviewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminModule,
  ],
  providers: [AuthService, ClientService, HelperService, QuotationService, PolicyService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
