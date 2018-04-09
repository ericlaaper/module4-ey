import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind1Page } from './mod4aeind1';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind1Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind1Page),
    ComponentsModule
  ],
})
export class Mod4aeind1PageModule {}
