import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };
  

  

  cimages =[

    {
      id:1,
      alt:'beach',
      src:'https://media.istockphoto.com/id/905049262/photo/varanasi-at-sunrise.jpg?s=612x612&w=0&k=20&c=ooiOJzZ4vYe8paql2eHINqyIW_3JX9Hm1FelZ9kBkZ8='},
      
      {id:2,
      alt:'taj',
      src:'https://media.istockphoto.com/id/903877840/photo/the-crowd-and-vehicles-in-front-of-hawa-mahal.jpg?s=612x612&w=0&k=20&c=OB7q3UQsf0vpcno_6-6WLFhp3Ugota3B5IH3WdFYhUY='
    },
    {
      id:3,
      alt:'redfort',
      src:'https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U='
    },
    {
      id:4,
      alt:'red',
      src:'https://cdn.pixabay.com/photo/2016/11/14/03/22/elephant-1822481_1280.jpg'},

  ]

}
