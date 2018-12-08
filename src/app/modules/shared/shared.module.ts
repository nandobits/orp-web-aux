import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Components */
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent
    ]
})
export class SharedModule { }
