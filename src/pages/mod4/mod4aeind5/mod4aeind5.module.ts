import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4aeind5Page } from './mod4aeind5';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4aeind5Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4aeind5Page),
    ComponentsModule
  ],
})
export class Mod4aeind5PageModule {}
