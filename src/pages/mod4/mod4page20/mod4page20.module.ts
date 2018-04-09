import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page20Page } from './mod4page20';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page20Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page20Page),
    ComponentsModule
  ],
})
export class Mod4page20PageModule {}
