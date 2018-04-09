import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind6Page } from './mod4aeind6';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind6Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind6Page),
    ComponentsModule
  ],
})
export class Mod4aeind6PageModule {}
