import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserpanelComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserappModule { }
