import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { MaterialModule } from '../material.module';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
