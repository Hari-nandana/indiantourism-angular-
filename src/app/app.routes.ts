import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StatesComponent } from './pages/states/states.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';

export const routes: Routes = [

    {
        path:'', component:HomeComponent
    },
    {
        path:'contact', component:ContactComponent
    },
    {
        path:'states', component:StatesComponent
    },
     {
        path:'home',component:HomeComponent
     } ,

    {
        path:'states/:id',component:SingleStateComponent
    },
    {
        path:'**',component:NotfoundComponent
    },
    
];
