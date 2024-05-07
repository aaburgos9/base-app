import { NgModule } from '@angular/core';
import { AccessStepGuard } from 'src/mbaas/core/guard/access-step.guard';
import { Routes, RouterModule } from '@angular/router';
import { MBAAS_STEPS } from 'src/mbaas/mbaas.const';
import {Byc0010Component } from './byc0010/byc0010.component';


const routes: Routes = [
  {
    path: MBAAS_STEPS.BYC0010.ROUTE,
    component:Byc0010Component,
    canActivate: [
      AccessStepGuard
    ],
    data: {
      stepId: MBAAS_STEPS.BYC0010.STEP
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltroRoutingModule { }
