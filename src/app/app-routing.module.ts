import { HomemenuComponent } from './adminapp/menuitems/homemenu/homemenu.component';

import { AdminpanelComponent } from './adminapp/adminpanel/adminpanel.component';
import { UserpanelComponent } from './userapp/userpanel/userpanel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './adminapp/dashboard/dashboard.component';
import { HomeComponent } from './userapp/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './userapp/login/login.component';
import { GalleryComponent } from './adminapp/menuitems/gallery/gallery.component';
import { ProgramsComponent } from './adminapp/menuitems/programs/programs.component';

const routes: Routes = [
  {path: '', component: UserpanelComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent}
  ]},
  {path: '', component: AdminpanelComponent, canActivate: [AuthGuard], children:[
    {path: 'admin', component: DashboardComponent},
    {path: 'programs', component: ProgramsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'homemenu', component: HomemenuComponent},
    
  ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
