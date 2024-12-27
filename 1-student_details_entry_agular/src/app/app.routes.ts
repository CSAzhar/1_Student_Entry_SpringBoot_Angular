import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisteremployeeComponent } from './components/registeremployee/registeremployee.component';
import { OtpverifyComponent } from './components/otpverify/otpverify.component';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    {
        path: 'home', component:HomeComponent
    },
    {
        path: '' , redirectTo:'home', pathMatch:'full'
    },
    {
        path: 'register-employee', component: RegisteremployeeComponent
    },
    {
        path: 'otp', component: OtpverifyComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'body', component: BodyComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'logout', component:LogoutComponent
    }
];
