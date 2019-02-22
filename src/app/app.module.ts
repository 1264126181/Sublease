import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule } from'@angular/common/http';


import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ExploreComponent } from './explore/explore.component';
import { LogInComponent } from './log-in/log-in.component';
import { PostApartmentComponent } from './post-apartment/post-apartment.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    WildCardComponent,
    SignInComponent,
    ExploreComponent,
    LogInComponent,
    PostApartmentComponent,
    ProfileComponent,
    EditProfileComponent,
    CreateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
