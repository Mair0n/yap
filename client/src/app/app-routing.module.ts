import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsComponent } from './animals/animals.component';
import { AnimalsCreatorComponent } from './animals-creator/animals-creator.component';
import { AnimalClassesComponent } from './animal-classes/animal-classes.component';
import { AnimalTypesComponent } from './animal-types/animal-types.component';
import { FormCreatorComponent } from './form-creator/form-creator';
import { FeedComponent } from './feed/feed.component';
import { LicenseComponent } from './license/license.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent },
  { path: 'animals/new', component: AnimalsCreatorComponent },
  { path: 'classes', component: AnimalClassesComponent },
  { path: 'classes/new', component: FormCreatorComponent },
  { path: 'types', component: AnimalTypesComponent },
  { path: 'types/new', component: FormCreatorComponent },
  { path: 'feeds', component: FeedComponent },
  { path: 'feeds/new', component: FormCreatorComponent },
  { path: 'licenses', component: LicenseComponent },
  { path: 'licenses/new', component: FormCreatorComponent },
  { path: 'cards', component: AnimalCardComponent },
  { path: 'cards/new', component: FormCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
