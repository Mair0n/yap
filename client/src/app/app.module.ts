import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCardModule, MatSelectModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsCreatorComponent } from './animals-creator/animals-creator.component';
import { AnimalClassesComponent } from './animal-classes/animal-classes.component';
import { AnimalTypesComponent } from './animal-types/animal-types.component';
import { FormCreatorComponent } from './form-creator/form-creator';
import { FeedComponent } from './feed/feed.component';
import { LicenseComponent } from './license/license.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalsCreatorComponent,
    AnimalClassesComponent,
    AnimalTypesComponent,
    FormCreatorComponent,
    FeedComponent,
    LicenseComponent,
    AnimalCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
