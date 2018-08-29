import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { CustomersComponent } from './customers/customers.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkplaceComponent,
    CustomersComponent,
    ArtisansComponent,
    VehiclesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/Workplace', pathMatch: 'full'
        },
      {
        path: 'Customer', component: CustomersComponent
      },
      {
        path: 'Workplace', component: WorkplaceComponent 
      },
      {
        path: 'Artisan', component: ArtisansComponent
      },
      {
        path: 'Vehicles', component: VehiclesComponent
      },
      {
        path: '404', component: NotfoundComponent
      },
      {
        path: '**', redirectTo: '404'
      }
    
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
