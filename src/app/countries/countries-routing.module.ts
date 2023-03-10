import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: '**', redirectTo: 'main' }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild( routes )],
  exports: [ RouterModule ]
})
export class CountriesRoutingModule {}
