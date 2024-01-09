import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { AllsortingComponent } from './allsorting/allsorting.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EditComponent } from './edit/edit.component';
import { IplStartComponent } from './ipl-start/ipl-start.component';
import { ListsplayersComponent } from './listsplayers/listsplayers.component';
import { TeamlistComponent } from './teamlist/teamlist.component';

const routes: Routes = [

  {
    path : 'teamlist',
    
   component : TeamlistComponent
  },
  {
    path : 'addplayers',
    
   component : AddplayersComponent
  },
  {
    path : 'listsplayers',
    
   component : ListsplayersComponent
  },
  {
    path : 'detailview/:id',
    
   component : DetailviewComponent
  },
  {
    path : 'edit/:id',
    
   component : EditComponent
  },
  {
    path : 'allsorting',
    
   component : AllsortingComponent
  },
  // {
  //   path:'statistics' , loadChildren:()=>import('./statistics/statistics.module')
  //   .then(mod=>mod.StatisticsModule)
  // },
  {
    path : '',
    
   component : IplStartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
