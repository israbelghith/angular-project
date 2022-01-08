import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { UpdateInstrumentComponent } from './update-instrument/update-instrument.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeInstrumentsComponent } from './type-instruments/type-instruments.component';
import { AddTypeInstrumentComponent } from './add-type-instrument/add-type-instrument.component';
import { UpdateTypeInstrumentComponent } from './update-type-instrument/update-type-instrument.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    AddInstrumentComponent,
    UpdateInstrumentComponent,
    TypeInstrumentsComponent,
    AddTypeInstrumentComponent,
    UpdateTypeInstrumentComponent,
    RechercheParCategorieComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
