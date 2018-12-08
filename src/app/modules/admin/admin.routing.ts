import { Routes } from '@angular/router';

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

export const appRoutes: Routes = [
    {
        path: 'admin',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'prospects/people', component: ProspectsPeopleComponent },
            { path: 'prospects/people/new', component: ProspectsPeopleNewComponent },
            { path: 'prospects/people/profile/:userId', component: ProspectsPeopleProfileComponent },
            { path: 'prospects/people/quote/:userId', component: ProspectsPeopleQuoteComponent },
            { path: 'prospects/people/quoting/car/:userId/:quotationId', component: ProspectsPeopleQuotingCarComponent },
            { path: 'prospects/people/quoting/car/update/data/:userId/:quotationId', component: ProspectsPeopleQuotingCarUpdateDataComponent },
            { path: 'prospects/people/quoting/car/update/coverage/:userId/:quotationId', component: ProspectsPeopleQuotingCarUpdateCoverageComponent },
            { path: 'prospects/people/quoting/car/costs/:userId/:quotationId', component: ProspectsPeopleQuotingCarCostsComponent },
            { path: 'prospects/people/quoting/car/invoice/:userId/:quotationId', component: ProspectsPeopleQuotingCarInvoiceComponent },
            { path: 'prospects/people/quoting/car/invoice/acept/:userId/:quotationId', component: ProspectsPeopleQuotingCarInvoiceAceptComponent },
            { path: 'prospects/people/quoting/car/policy/new/:userId/:quotationId/:quotationCostId', component: ProspectsPeopleQuotingCarPolicyNewComponent },
            { path: 'clients/people', component: ClientsPeopleListComponent },
            { path: 'clients/people/profile/:userId', component: ClientsPeopleProfileComponent },
            { path: 'clients/people/policy/update/:userId/:policyId/:quotationCostId', component: ClientsPeoplePolicyUpdateComponent },
            { path: 'clients/people/policy/renovate/:userId/:policyId/:quotationCostId', component: ClientsPeoplePolicyRenovateComponent },
            { path: 'clients/people/policy/endorse/:userId/:policyId/:quotationCostId', component: ClientsPeoplePolicyEndorseComponent },
            { path: 'clients/people/policy/cancel/:userId/:policyId/:quotationCostId', component: ClientsPeoplePolicyCancelComponent },
            { path: 'clients/people/policy/historic/:userId', component: HistoricComponent },
        ]
    }
]
