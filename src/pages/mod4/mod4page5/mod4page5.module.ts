import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page5Page } from './mod4page5';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page5Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page5Page),
    ComponentsModule
  ],
})
export class Mod4page5PageModule {}
