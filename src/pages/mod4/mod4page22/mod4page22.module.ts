import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page22Page } from './mod4page22';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page22Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page22Page),
    ComponentsModule
  ],
})
export class Mod4page22PageModule {}
