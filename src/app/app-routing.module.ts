import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//new components for the project
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
