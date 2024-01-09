import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopsixesComponent} from './topsixes/topsixes.component';
import {TopscorersComponent} from './topscorers/topscorers.component';
import { TophundredComponent } from './tophundred/tophundred.component';
import { TopfiftyComponent } from './topfifty/topfifty.component';




const routes: Routes = [
  {path:'topsixes', component :TopsixesComponent},
  {path:'topscorers', component :TopscorersComponent},
  {path:'topscorers', component :TopscorersComponent},
  {path:'tophundred', component :TophundredComponent},
  {path:'topfifty', component :TopfiftyComponent}

  

  

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
