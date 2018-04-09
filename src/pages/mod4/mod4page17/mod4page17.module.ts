import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page17Page } from './mod4page17';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page17Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page17Page),
    ComponentsModule
  ],
})
export class Mod4page17PageModule {}
