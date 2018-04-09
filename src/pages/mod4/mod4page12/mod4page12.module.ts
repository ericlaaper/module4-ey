import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page12Page } from './mod4page12';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page12Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page12Page),
    ComponentsModule
  ],
})
export class Mod4page12PageModule {}
