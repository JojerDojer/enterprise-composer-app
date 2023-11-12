/**
 * Title: composer-details.component.ts
 * Author: John Davidson
 * Date: 2 November 2023
 * Description: Composer details component (Composer details page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import the ActivatedRoute.
import { IComposer } from '../composer.interface'; // Import IComposer.
import { ComposerService } from '../composer.service'; // Import ComposerService.

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

// Create a class to manage composer details.
export class ComposerDetailsComponent implements OnInit {

  // Variables to store composerId and composer details.
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    // Extract the composer ID from the route parameters.
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    // Check if a composer ID exists.
    if (this.composerId) {
      // Fetch composer details based on the composer ID.
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
