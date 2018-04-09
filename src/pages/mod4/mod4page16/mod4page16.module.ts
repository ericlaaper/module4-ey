import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page16Page } from './mod4page16';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page16Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page16Page),
    ComponentsModule
  ],
})
export class Mod4page16PageModule {}
