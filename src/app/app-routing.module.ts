import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
    {
      path:`userhome`,component:UserhomeComponent
    },
    {
      path:``,component:LoginComponent
    },
    {
      path:'register',component:RegisterComponent
    },
    
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
