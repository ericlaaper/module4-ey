import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind2Page } from './mod4aeind2';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind2Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind2Page),
    ComponentsModule
  ],
})
export class Mod4aeind2PageModule {}
