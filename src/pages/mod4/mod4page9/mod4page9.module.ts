import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page9Page } from './mod4page9';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page9Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page9Page),
    ComponentsModule
  ],
})
export class Mod4page9PageModule {}
