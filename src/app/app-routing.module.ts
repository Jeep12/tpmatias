import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { CowsComponent } from './components/cows/cows.component';
import { AgregarVacaComponent } from './components/agregar-vaca/agregar-vaca.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,  {
    path:'home',
    component:HomeComponent
  }
  ,{
    path:'gallery',
    component:GalleryComponent
  }
  ,{
    path:'contact',
    component:ContactComponent
  },
  {
    path:'cows',
    component:CowsComponent
  },
  {
    path:'AgregarVaca',
    component:AgregarVacaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }