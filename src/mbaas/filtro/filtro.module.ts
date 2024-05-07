import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroRoutingModule } from './filtro-routing.module';
import { ButtonContinueModule } from 'src/mbaas/core/components/button-continue/button-continue.module';
import { ButtonBackModule } from 'src/mbaas/core/components/button-back/button-back.module';
import { PipeModuleModule } from 'src/mbaas/core/pipes/pipe-module.module';
import { DirectivesModule } from 'src/mbaas/core/directives/directives.mudule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderEnterpriseModule } from '../core/components/header-enterprise/header-enterprise.module';
import { FormModule } from '../core/components/form/form.module';
import { ResultsModule } from '../core/components/results/results.module';
import { ContentBoxModule } from '../core/components/content-box/content-box.module';
import { HeadersModule } from '../core/components/headers/headers.component.module';
import { TitleModule } from '../core/components/title/title.module';
import {Byc0010Component } from './byc0010/byc0010.component';


@NgModule({
  declarations: [Byc0010Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderEnterpriseModule,
    FiltroRoutingModule,
    ButtonContinueModule,
    ButtonBackModule,
    PipeModuleModule,
    DirectivesModule,
    FormModule,
    ResultsModule,
    ContentBoxModule,
    HeadersModule,
    TitleModule
  ]
})
export class FiltroModule { }
