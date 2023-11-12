/**
 * Title: composer-list.component.ts
 * Author: John Davidson
 * Date: 10 November 2023
 * Description: Composer component
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface'; // Import IComposer.
import { ComposerService } from '../composer.service'; // Import ComposerService.
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Declaration of an array to store composer objects as an observable.
  composers: Observable<IComposer[]>;
  // Creates a form control for composer search input.
  txtSearchControl = new FormControl('');

  // Injects the composerService as a dependency.
  constructor(private composerService: ComposerService) {
    // Fetch an array of composer objects.
    this.composers = this.composerService.getComposers();

    // On user input in the txtSearchControl, this sets a 500ms delay before invoking filterComposers,
    // passing the entered text for handling filtering logic.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));

  }

  ngOnInit(): void {
  }


  // A method to filter composer objects based on a provided name.
  filterComposers(name: string) {
    // Assigns the filtered composer objects to the 'composers' array.
    this.composers = this.composerService.filterComposers(name);
  }

}
