import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page1Page } from './mod4page1';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page1Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page1Page),
    ComponentsModule
  ],
})
export class Mod4page1PageModule {}
