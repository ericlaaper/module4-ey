import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page15Page } from './mod4page15';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page15Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page15Page),
    ComponentsModule
  ],
})
export class Mod4page15PageModule {}
