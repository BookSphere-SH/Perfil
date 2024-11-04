import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/pages/profile.component';

export const routes: Routes = [
  { path: 'profile/:type/:id', component: ProfileComponent },
  { path: '', redirectTo: '/profile/user/1', pathMatch: 'full' },  // Default redirect

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
