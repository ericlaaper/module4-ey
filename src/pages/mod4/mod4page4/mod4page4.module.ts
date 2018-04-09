import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page4Page } from './mod4page4';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page4Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page4Page),
    ComponentsModule
  ],
})
export class Mod4page4PageModule {}
