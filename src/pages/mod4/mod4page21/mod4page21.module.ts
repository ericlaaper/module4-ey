import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page21Page } from './mod4page21';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page21Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page21Page),
    ComponentsModule
  ],
})
export class Mod4page21PageModule {}
