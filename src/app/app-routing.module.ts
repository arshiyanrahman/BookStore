import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent,canActivate :[AuthGuard]},
  {path:'cart',component:CartComponent, canActivate :[AuthGuard]},
  {path:'details/:name', component:DetailsComponent, canActivate :[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path: 'not-found', component:NotFoundComponent, canActivate :[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
