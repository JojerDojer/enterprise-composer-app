/**
 * Title: app-routing-module.ts
 * Author: John Davidson
 * Date: 28 October 2023
 * Description Routing file
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component'; // Import the composer component.
import { AboutComponent } from './about/about.component'; // Import the about component.
import { ContactComponent } from './contact/contact.component'; // Import the contact component.
import { ComposerDetailsComponent } from './composer-details/composer-details.component'; // Import the composer-details component.

// Establish route components and paths for the Composer List, About, and Contact page.
const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
