import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.homeUrl}/remoteEntry.js`,
        exposedModule: './Module'
      }).then(m => m.HomeModule)
  },
  {
    path: 'carousel',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.carouselUrl}/remoteEntry.js`,
        exposedModule: './Module'
      }).then(m => m.CarouselModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.loginUrl}/remoteEntry.js`,
        exposedModule: './Module'
      }).then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
