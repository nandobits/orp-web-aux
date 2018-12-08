import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

/* Routing */
import { appRoutes } from './admin.routing';

/* Pages */
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProspectsPeopleComponent } from './pages/prospects/people/list/prospects-people.component';
import { ProspectsPeopleNewComponent } from './pages/prospects/people/new/prospects-people-new.component';
import { ProspectsPeopleProfileComponent } from './pages/prospects/people/profile/prospects-people-profile.component';
import { ProspectsPeopleQuoteComponent } from './pages/prospects/people/quote/prospects-people-quote.component';
import { ProspectsPeopleQuotingCarComponent } from './pages/prospects/people/quoting/car/show/prospects-people-quoting-car.component';
import { ProspectsPeopleQuotingCarUpdateDataComponent } from './pages/prospects/people/quoting/car/update-data/prospects-people-quoting-car-update-data.component';
import { ProspectsPeopleQuotingCarUpdateCoverageComponent } from './pages/prospects/people/quoting/car/update-coverage/prospects-people-quoting-car-update-coverage.component';
import { ProspectsPeopleQuotingCarCostsComponent } from './pages/prospects/people/quoting/car/costs/prospects-people-quoting-car-costs.component';
import { ProspectsPeopleQuotingCarInvoiceComponent } from './pages/prospects/people/quoting/car/invoice/prospects-people-quoting-car-invoice.component';
import { ProspectsPeopleQuotingCarInvoiceAceptComponent } from './pages/prospects/people/quoting/car/invoice-acept/prospects-people-quoting-car-invoice-acept.component';
import { ProspectsPeopleQuotingCarPolicyNewComponent } from './pages/prospects/people/quoting/car/policy/new/prospects-people-quoting-car-policy-new.component';
import { ClientsPeopleListComponent } from './pages/clients/people/list/clients-people-list.component';
import { ClientsPeopleProfileComponent } from './pages/clients/people/profile/clients-people-profile.component';
import { ClientsPeoplePolicyUpdateComponent } from './pages/clients/people/policy/update/clients-people-policy-update.component';
import { ClientsPeoplePolicyRenovateComponent } from './pages/clients/people/policy/renovate/clients-people-policy-renovate.component';
import { ClientsPeoplePolicyEndorseComponent } from './pages/clients/people/policy/endorse/clients-people-policy-endorse.component';
import { ClientsPeoplePolicyCancelComponent } from './pages/clients/people/policy/cancel/clients-people-policy-cancel.component';
import { HistoricComponent } from './pages/clients/people/policy/historic/historic.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
      PagesComponent,
      DashboardComponent,
      ProspectsPeopleComponent,
      ProspectsPeopleNewComponent,
      ProspectsPeopleProfileComponent,
      ProspectsPeopleQuoteComponent,
      ProspectsPeopleQuotingCarComponent,
      ProspectsPeopleQuotingCarUpdateDataComponent,
      ProspectsPeopleQuotingCarUpdateCoverageComponent,
      ProspectsPeopleQuotingCarCostsComponent,
      ProspectsPeopleQuotingCarInvoiceComponent,
      ProspectsPeopleQuotingCarInvoiceAceptComponent,
      ProspectsPeopleQuotingCarPolicyNewComponent,
      ClientsPeopleListComponent,
      ClientsPeopleProfileComponent,
      ClientsPeoplePolicyUpdateComponent,
      ClientsPeoplePolicyRenovateComponent,
      ClientsPeoplePolicyEndorseComponent,
      ClientsPeoplePolicyCancelComponent,
      HistoricComponent,
  ],
  providers: [

  ]
})
export class AdminModule { }
