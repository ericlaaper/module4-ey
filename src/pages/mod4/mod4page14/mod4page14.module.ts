import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page14Page } from './mod4page14';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page14Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page14Page),
    ComponentsModule
  ],
})
export class Mod4page14PageModule {}
