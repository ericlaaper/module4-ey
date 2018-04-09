import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page29Page } from './mod4page29';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page29Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page29Page),
    ComponentsModule
  ],
})
export class Mod4page29PageModule {}
