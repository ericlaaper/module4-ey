import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page33Page } from './mod4page33';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page33Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page33Page),
    ComponentsModule
  ],
})
export class Mod4page33PageModule {}
