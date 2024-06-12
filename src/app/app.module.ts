import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CowsComponent } from './components/cows/cows.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CowComponent } from './components/cow/cow.component';
import { AgregarVacaComponent } from './components/agregar-vaca/agregar-vaca.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    CowsComponent,
    NavigationComponent,
    FooterComponent,
    CowComponent,
    AgregarVacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
