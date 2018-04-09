import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind3Page } from './mod4aeind3';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind3Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind3Page),
    ComponentsModule
  ],
})
export class Mod4aeind3PageModule {}
