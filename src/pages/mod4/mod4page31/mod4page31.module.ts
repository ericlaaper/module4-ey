import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page31Page } from './mod4page31';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page31Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page31Page),
    ComponentsModule
  ],
})
export class Mod4page31PageModule {}
