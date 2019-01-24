import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifGeneratorComponent } from './gif-generator/gif-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { GitGeneratorRoutingModule } from './git-generator-routing.module';

@NgModule({
  declarations: [GifGeneratorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    GitGeneratorRoutingModule
  ]
})
export class GifGeneratorModule { }
