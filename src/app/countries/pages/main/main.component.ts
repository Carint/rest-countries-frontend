import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

interface Region {
  value: string;
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  countries!: Country[];
  region!: Region;
  regions: Region[] = [
    { value: 'africa', name: 'africa' },
    { value: 'americas', name: 'americas' },
    { value: 'asia', name: 'asia' },
    { value: 'europe', name: 'europe' },
    { value: 'oceania', name: 'oceania'}
  ];

  regionSelect = new FormControl('');

  constructor(
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.getAllCountries();

    this.regionSelect.valueChanges.pipe().subscribe( res => {
      this.getRegion(this.regionSelect.value || '')
    })
  }

  getRegion(value: string) {
    if (value != '') {
      this.countryService.searchByRegion(value).subscribe(
        result => {
          this.countries = result;
        }
      );
    }
  }

  getAllCountries() {
    this.countryService.allCountries().subscribe(
      result => {
        this.countries = result;
      }
    )
  }
}
