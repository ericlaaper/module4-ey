import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page2Page } from './mod4page2';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page2Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page2Page),
    ComponentsModule
  ],
})
export class Mod4page2PageModule {}
