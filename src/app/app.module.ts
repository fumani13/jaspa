import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { NavbarComponent } from './navbar/navbar.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { CustomersComponent } from './customers/customers.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    Ng2SearchPipeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forRoot([
      {
        path: '', component: WorkplaceComponent
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
