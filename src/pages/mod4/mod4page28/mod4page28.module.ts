import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page28Page } from './mod4page28';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page28Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page28Page),
    ComponentsModule
  ],
})
export class Mod4page28PageModule {}
