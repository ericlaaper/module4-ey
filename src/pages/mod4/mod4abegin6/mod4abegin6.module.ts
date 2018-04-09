import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin6Page } from './mod4abegin6';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin6Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin6Page),
    ComponentsModule
  ],
})
export class Mod4abegin6PageModule {}
