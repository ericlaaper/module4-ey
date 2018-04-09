import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin1Page } from './mod4abegin1';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin1Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin1Page),
    ComponentsModule
  ],
})
export class Mod4abegin1PageModule {}
