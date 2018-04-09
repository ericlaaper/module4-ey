import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page10Page } from './mod4page10';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page10Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page10Page),
    ComponentsModule
  ],
})
export class Mod4page10PageModule {}
