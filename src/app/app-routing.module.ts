import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EnglishComponent } from '../english/english.component';

const routes: Routes = [
  // { path: 'es', component: AppComponent },
  // { path: 'en', component: EnglishComponent },
  // { path: '', redirectTo: 'es', pathMatch: 'full'},
  // { path: '**', redirectTo: 'es'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
