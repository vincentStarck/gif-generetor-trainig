import { NgModule } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ComponentOneComponent },
  {
    path: 'gif-generator',
    loadChildren: './gif-generator/gif-generator.module#GifGeneratorModule'
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
