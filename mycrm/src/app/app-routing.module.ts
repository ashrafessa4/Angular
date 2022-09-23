import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
// import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"login"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"main", component:MainComponent,canActivate: [AuthGuard]},
  {path:"main/customers", component:MainComponent,canActivate: [AuthGuard]},
  {path:"main/contacts", component:MainComponent,canActivate: [AuthGuard]},
  {path:"**", component:PnfComponent,canActivate: [AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
