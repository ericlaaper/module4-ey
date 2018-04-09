import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind4Page } from './mod4aeind4';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind4Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind4Page),
    ComponentsModule
  ],
})
export class Mod4aeind4PageModule {}
