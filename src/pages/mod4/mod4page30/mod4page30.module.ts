import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page30Page } from './mod4page30';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page30Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page30Page),
    ComponentsModule
  ],
})
export class Mod4page30PageModule {}
