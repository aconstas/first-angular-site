// with Angular CLI: ng new my-project --routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  // ** wildcard that matches anything that didn't get matched above, then redirects
  { path: '**', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
  // .forRoot is how we register the routes above with Angular, only called once in application
  imports: [RouterModule.forRoot(routes)],
  // RouterModule exported so full set of tools are accessible without additional imports
  exports: [RouterModule],
})
export class AppRoutingModule {}
