/**
 * Title: composer.service.ts
 * Author: John Davidson
 * Date: 10 November 2023
 * Description: Service class for Composer objects
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ComposerService {

  // Array to hold composer objects.
  composers: Array<IComposer>;

  constructor() {
    this.composers = [ // Initializing composer objects.
      {composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 102, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 103, fullName: "Richard Wagner", genre: "Classical"},
      {composerId: 104, fullName: "Claude Debussy", genre: "Classical"}
    ]
  }

  // A method to retrieve all composers.
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // A method to retrieve a specified composer by their ID.
  getComposer(composerId: number) {
    for (let composer of this.composers) // Iterate through the composer array.
      if (composer.composerId === composerId) { // Check for matching composer ID.
        return composer; // If found, return composer.
      }
  }

  // A method to filter composers based on a provided name.
  filterComposers(name: string): Observable<IComposer[]> {
    // Create an observable from the 'composers' array.
    return of(this.composers).pipe(
      // Using 'map' operator to transform the data.
      map(composers =>
        // Filter the composers array based on the provided name.
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
