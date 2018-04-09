import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page19Page } from './mod4page19';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page19Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page19Page),
    ComponentsModule
  ],
})
export class Mod4page19PageModule {}
