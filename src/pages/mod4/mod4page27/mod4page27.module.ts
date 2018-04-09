import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page27Page } from './mod4page27';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page27Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page27Page),
    ComponentsModule
  ],
})
export class Mod4page27PageModule {}
