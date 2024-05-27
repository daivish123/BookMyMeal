import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { ForgotPasswordComponent } from './auth-components/forgot-password/forgot-password.component';
import { AboutusComponent } from './auth-components/aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './auth-components/privacy-policy/privacy-policy.component';
import { TermsandconditionComponent } from './auth-components/termsandcondition/termsandcondition.component';
import { ContactUsComponent } from '../app/auth-components/contact-us/contact-us.component';

const routes: Routes = [
  {path:"signup", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path:"forgotpassword", component: ForgotPasswordComponent},
  {path:"aboutus", component: AboutusComponent},
  {path: "PrivacyPolicy", component: PrivacyPolicyComponent},
  {path: "Termsandcondition", component: TermsandconditionComponent},
  {path: "ContactUs", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
