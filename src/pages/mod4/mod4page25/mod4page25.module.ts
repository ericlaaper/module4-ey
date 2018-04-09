import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4page25Page } from './mod4page25';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4page25Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4page25Page),
    ComponentsModule
  ],
})
export class Mod4page25PageModule {}
