import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page13Page } from './mod4page13';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page13Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page13Page),
    ComponentsModule
  ],
})
export class Mod4page13PageModule {}
