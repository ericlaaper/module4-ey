import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page26Page } from './mod4page26';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page26Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page26Page),
    ComponentsModule
  ],
})
export class Mod4page26PageModule {}
