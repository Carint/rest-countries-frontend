import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "../interfaces/countries.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly _url = 'https://restcountries.com/v3.1';

  constructor(
    private readonly _httpClient: HttpClient
  ) {}

  allCountries() {
    const url = `${this._url}/all`;

    return this._httpClient.get<Country[]>(url);
  }

  searchByRegion(regionName: string) {
    const url = `${this._url}/region/${regionName}`;

    return this._httpClient.get<Country[]>(url);
  }
}
