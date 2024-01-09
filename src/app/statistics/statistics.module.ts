import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { TopsixesComponent } from './topsixes/topsixes.component';
import { TopscorersComponent } from './topscorers/topscorers.component';
import { TophundredComponent } from './tophundred/tophundred.component';
import { TopfiftyComponent } from './topfifty/topfifty.component';


@NgModule({
  declarations: [
    TopsixesComponent,
    TopscorersComponent,
    TophundredComponent,
    TopfiftyComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
