import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';


import { LoginComponent } from './pages/login/login.component';
import { PipesModule } from "../shared/pipes/pipes.module";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  }
]

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent

    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      PipesModule,
      RouterModule.forChild(routes),
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
    ]
})
export class AuthModule { }
