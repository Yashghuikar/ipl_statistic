import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { ListsplayersComponent } from './listsplayers/listsplayers.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EditComponent } from './edit/edit.component';
import { IplStartComponent } from './ipl-start/ipl-start.component';
import { FooterComponent } from './footer/footer.component';
import { AllsortingComponent } from './allsorting/allsorting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamlistComponent,
    AddplayersComponent,
    ListsplayersComponent,
    DetailviewComponent,
    EditComponent,
    IplStartComponent,
    FooterComponent,
    AllsortingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
