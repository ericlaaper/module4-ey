import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page3Page } from './mod4page3';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page3Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page3Page),
    ComponentsModule
  ],
})
export class Mod4page3PageModule {}
