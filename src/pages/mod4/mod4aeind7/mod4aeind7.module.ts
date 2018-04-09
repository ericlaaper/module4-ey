import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind7Page } from './mod4aeind7';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind7Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind7Page),
    ComponentsModule
  ],
})
export class Mod4aeind7PageModule {}
