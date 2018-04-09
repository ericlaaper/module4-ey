import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page32Page } from './mod4page32';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page32Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page32Page),
    ComponentsModule
  ],
})
export class Mod4page32PageModule {}
