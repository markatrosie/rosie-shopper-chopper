import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PdfUploaderComponent } from './pdf-uploader/pdf-uploader.component';
import { PromoUploaderComponent } from './promo-uploader/promo-uploader.component';
import { WorkingPanelComponent } from './working-panel/working-panel.component';
import { ContextPanelComponent } from './context-panel/context-panel.component';
import { PageNavComponent } from './page-nav/page-nav.component';
import { PageViewComponent } from './page-view/page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PromoListComponent,
    PdfUploaderComponent,
    PromoUploaderComponent,
    WorkingPanelComponent,
    ContextPanelComponent,
    PageNavComponent,
    PageViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
