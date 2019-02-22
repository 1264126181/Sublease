import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from'./explore/explore.component';
import { WildCardComponent } from './wild-card/wild-card.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { LogInComponent } from'./log-in/log-in.component'
import { PostApartmentComponent } from './post-apartment/post-apartment.component';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileComponent } from'./profile/profile.component';
import { EditProfileComponent } from'./edit-profile/edit-profile.component';
import { CreateProfileComponent} from'./create-profile/create-profile.component';


const routes: Routes = [
  { path:'explore', component: ExploreComponent},
  { path:'', redirectTo:'/explore',pathMatch:'full'},
  { path:'signin', component:SignInComponent},
  { path:'login', component:LogInComponent},
  { path:'postApartment', component:PostApartmentComponent},
  { path:'profile',  component:ProfileComponent,},
  { path:'editProfile', component:EditProfileComponent},
  { path:'createProfile',component:CreateProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[ExploreComponent,
                                WildCardComponent,
                                SignInComponent,
                                LogInComponent ,
                                PostApartmentComponent,
                                ProfileComponent,
                                EditProfileComponent,
                                CreateProfileComponent,             
                                                 ]


