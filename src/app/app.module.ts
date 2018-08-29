import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { CustomersComponent } from './customers/customers.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkplaceComponent,
    CustomersComponent,
    ArtisansComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
