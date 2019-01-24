import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifGeneratorComponent } from './gif-generator/gif-generator.component';

const routes: Routes = [
  {
    path: '',
    component: GifGeneratorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GitGeneratorRoutingModule { }
