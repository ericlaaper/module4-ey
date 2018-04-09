import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin7Page } from './mod4abegin7';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin7Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin7Page),
    ComponentsModule
  ],
})
export class Mod4abegin7PageModule {}
