import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { SingerFormComponent } from './singer-form/singer-form.component';



const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'singer', component: SingerListComponent },
    { path: 'addSinger', component: SingerFormComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
