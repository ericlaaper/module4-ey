import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page23Page } from './mod4page23';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page23Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page23Page),
    ComponentsModule
  ],
})
export class Mod4page23PageModule {}
