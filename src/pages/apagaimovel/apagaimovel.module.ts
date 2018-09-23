import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Apagaimovel } from './apagaimovel';

@NgModule({
  declarations: [
    Apagaimovel,
  ],
  imports: [
    IonicPageModule.forChild(Apagaimovel),
  ],
})
export class ApagaimovelModule {}
