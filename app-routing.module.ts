import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { UpdateInstrumentComponent } from './update-instrument/update-instrument.component';
import { TypeInstrumentsComponent } from './type-instruments/type-instruments.component';
import { AddTypeInstrumentComponent } from './add-type-instrument/add-type-instrument.component';
import { UpdateTypeInstrumentComponent } from './update-type-instrument/update-type-instrument.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InstrumentGuard } from './instrument.guard';


const routes: Routes = [
{path: "instruments", component : InstrumentsComponent},
{path: "add-instrument", component : AddInstrumentComponent,canActivate:[InstrumentGuard]},
{path: "updateInstrument/:id", component: UpdateInstrumentComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "", redirectTo : "instruments", pathMatch : "full"},
{path: "typeInstruments", component : TypeInstrumentsComponent},
{path: "add-typeInstrument", component : AddTypeInstrumentComponent},
{path: "updateTypeInstrument/:id", component: UpdateTypeInstrumentComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
