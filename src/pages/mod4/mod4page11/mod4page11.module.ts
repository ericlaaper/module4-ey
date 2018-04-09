import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page11Page } from './mod4page11';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page11Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page11Page),
    ComponentsModule
  ],
})
export class Mod4page11PageModule {}
