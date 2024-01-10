import { Routes } from '@angular/router';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditHeroesComponent } from './components/edit-heroes/edit-heroes.component';

export const routes: Routes = [
    {path:'',redirectTo:'heroes',pathMatch:'full'},
    {path:'crisis-center',component:CrisisCenterComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'admin',component:AdminComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'edit-heroes',component:EditHeroesComponent},
    {path:'**',component:NotfoundComponent}
];
