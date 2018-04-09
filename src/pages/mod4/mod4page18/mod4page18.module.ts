import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page18Page } from './mod4page18';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page18Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page18Page),
    ComponentsModule
  ],
})
export class Mod4page18PageModule {}
