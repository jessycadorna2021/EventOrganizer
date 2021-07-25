import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgCalendarModule } from 'ionic2-calendar';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'wedding',
    loadChildren: () => import('./wedding/wedding.module').then( m => m.WeddingPageModule)
  },
  {
    path: 'birthday',
    loadChildren: () => import('./birthday/birthday.module').then( m => m.BirthdayPageModule)
  },
  {
    path: 'reunion',
    loadChildren: () => import('./reunion/reunion.module').then( m => m.ReunionPageModule)
  },
  {
    path: 'fiesta',
    loadChildren: () => import('./pages/fiesta/fiesta.module').then( m => m.FiestaPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'suggestion',
    loadChildren: () => import('./pages/suggestion/suggestion.module').then( m => m.SuggestionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'records',
    loadChildren: () => import('./pages/records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'anniversaries',
    loadChildren: () => import('./anniversaries/anniversaries.module').then( m => m.AnniversariesPageModule)
  },
  {
    path: 'servicepack',
    loadChildren: () => import('./pages/servicepack/servicepack.module').then( m => m.ServicepackPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'sched',
    loadChildren: () => import('./sched/sched.module').then( m => m.SchedPageModule)
  },
  {
    path: 'packagetransactions',
    loadChildren: () => import('./packagetransactions/packagetransactions.module').then( m => m.PackagetransactionsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
  },
  {
    path: 'customizedtransaction',
    loadChildren: () => import('./customizedtransaction/customizedtransaction.module').then( m => m.CustomizedtransactionPageModule)
  },
  {
    path: 'customizeregister',
    loadChildren: () => import('./customizeregister/customizeregister.module').then( m => m.CustomizeregisterPageModule)
  },
  {
    path: 'birthpacktransact',
    loadChildren: () => import('./birthpacktransact/birthpacktransact.module').then( m => m.BirthpacktransactPageModule)
  },
  {
    path: 'reunionhpacktransact',
    loadChildren: () => import('./reunionhpacktransact/reunionhpacktransact.module').then( m => m.ReunionhpacktransactPageModule)
  },
  {
    path: 'annivpacktransact',
    loadChildren: () => import('./annivpacktransact/annivpacktransact.module').then( m => m.AnnivpacktransactPageModule)
  },
  {
    path: 'weddingpacktransact',
    loadChildren: () => import('./weddingpacktransact/weddingpacktransact.module').then( m => m.WeddingpacktransactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), NgCalendarModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
