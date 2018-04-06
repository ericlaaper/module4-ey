import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { VoettekstComponent } from './voettekst/voettekst';
@NgModule({
	declarations: [ProgressBarComponent,
    VoettekstComponent],
	imports: [],
	exports: [ProgressBarComponent,
    VoettekstComponent]
})
export class ComponentsModule {}
