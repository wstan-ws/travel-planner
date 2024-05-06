import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TraveldatesComponent } from './traveldates/traveldates.component';
import { TravelEntityComponent } from './travel-entity/travel-entity.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'travel-date', component: TraveldatesComponent},
  {path: 'travel-entity', component: TravelEntityComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
