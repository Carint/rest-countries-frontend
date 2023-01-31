import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() country!: Country;
}
