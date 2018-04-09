import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind8Page } from './mod4aeind8';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind8Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind8Page),
    ComponentsModule
  ],
})
export class Mod4aeind8PageModule {}
