import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'Home', component:HomeComponent},
    {path:'About', component:AboutComponent},
    {path:'Contact', component:ContactComponent},
    {path:'Services', component:ServicesComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutComponent,ContactComponent]