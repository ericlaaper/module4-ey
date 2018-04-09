import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin8Page } from './mod4abegin8';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin8Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin8Page),
    ComponentsModule
  ],
})
export class Mod4abegin8PageModule {}
