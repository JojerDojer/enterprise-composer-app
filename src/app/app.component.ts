/**
 * Title: app.component.ts
 * Author: John Davidson
 * Date: 28 October 2023
 * Description: App Component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 4.4 - Async Pipe";
}
