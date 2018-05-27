import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StaticInfoComponent} from './static-info/static-info.component'
const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
path:'staticinfo/:paramOne',
component:StaticInfoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
