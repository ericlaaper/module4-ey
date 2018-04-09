import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page7Page } from './mod4page7';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page7Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page7Page),
    ComponentsModule
  ],
})
export class Mod4page7PageModule {}
