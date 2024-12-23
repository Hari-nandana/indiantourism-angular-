import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { StatesComponent } from "./pages/states/states.component";
import { CardComponent } from './ui/card/card.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, StatesComponent, ContactComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})




export class AppComponent {
  title = 'it';

  


  
}
