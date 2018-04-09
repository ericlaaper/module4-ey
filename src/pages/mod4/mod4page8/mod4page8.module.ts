import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page8Page } from './mod4page8';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page8Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page8Page),
    ComponentsModule
  ],
})
export class Mod4page8PageModule {}
