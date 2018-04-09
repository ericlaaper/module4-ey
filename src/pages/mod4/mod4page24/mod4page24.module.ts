import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page24Page } from './mod4page24';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page24Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page24Page),
    ComponentsModule
  ],
})
export class Mod4page24PageModule {}
