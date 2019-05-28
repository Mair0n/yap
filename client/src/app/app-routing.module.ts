import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsComponent } from './animals/animals.component';
import { AnimalsCreatorComponent } from './animals-creator/animals-creator.component';
import { AnimalClassesComponent } from './animal-classes/animal-classes.component';
import { AnimalClassCreatorComponent } from './animal-class-creator/animal-class-creator.component';
import { AnimalTypesComponent } from './animal-types/animal-types.component';
import { AnimalTypeCreatorComponent } from './animal-type-creator/animal-type-creator.component';
import { FeedComponent } from './feed/feed.component';
import { FeedCreatorComponent } from './feed-creator/feed-creator.component';
import { LicenseComponent } from './license/license.component';
import { LicenseCreatorComponent } from './license-creator/license-creator.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { AnimalCardCreatorComponent } from './animal-card-creator/animal-card-creator.component';

const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent },
  { path: 'animals/new', component: AnimalsCreatorComponent },
  { path: 'classes', component: AnimalClassesComponent },
  { path: 'classes/new', component: AnimalClassCreatorComponent },
  { path: 'types', component: AnimalTypesComponent },
  { path: 'types/new', component: AnimalTypeCreatorComponent },
  { path: 'feeds', component: FeedComponent },
  { path: 'feeds/new', component: FeedCreatorComponent },
  { path: 'licenses', component: LicenseComponent },
  { path: 'licenses/new', component: LicenseCreatorComponent },
  { path: 'cards', component: AnimalCardComponent },
  { path: 'cards/new', component: AnimalCardCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
