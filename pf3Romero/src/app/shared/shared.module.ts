import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [

  ],
  imports: [

    CommonModule,
  ],
  exports: [

    DirectivesModule,
    PipesModule,
  ],
  providers: [

  ]
})
export class SharedModule { }
