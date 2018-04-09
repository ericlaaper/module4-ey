import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page34Page } from './mod4page34';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page34Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page34Page),
    ComponentsModule
  ],
})
export class Mod4page34PageModule {}
