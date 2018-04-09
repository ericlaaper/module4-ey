import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page6Page } from './mod4page6';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page6Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page6Page),
    ComponentsModule
  ],
})
export class Mod4page6PageModule {}
