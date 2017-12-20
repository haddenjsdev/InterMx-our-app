import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { KPIComponent } from './KPI/kpi.component';
import { Kpi1Component } from './KPI/kpi1/kpi1.component';
import { Kpi2Component } from './KPI/kpi2/kpi2.component';
import { Kpi3Component } from './KPI/kpi3/kpi3.component';
import { Kpi4Component } from './KPI/kpi4/kpi4.component';
import { Row2Component } from './row2/row2.component';
import { Comp1Component } from './row2/comp1/comp1.component';
import { Comp2Component } from './row2/comp2/comp2.component';
import { Row3Component } from './row3/row3.component';
import { RecentCallsComponent } from './row3/recent-calls/recent-calls.component';
import { RecentEmailsComponent } from './row3/recent-emails/recent-emails.component';
import { ClientDataComponent } from './row3/client-data/client-data.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { TopMarketMapComponent } from './row2/comp1/top-market-map/top-market-map.component';
import { InsightCardsComponent } from './row2/comp2/insight-cards/insight-cards.component';
import { TrackerComponent } from './row3/client-data/tracker/tracker.component';
import { WidgetworldComponent } from './widgetworld/widgetworld.component';

const myRoots: Routes = [{
    path: 'app',
    component: KPIComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    KPIComponent,
    Kpi1Component,
    Kpi2Component,
    Kpi3Component,
    Kpi4Component,
    Row2Component,
    Comp1Component,
    Comp2Component,
    Row3Component,
    RecentCallsComponent,
    RecentEmailsComponent,
    ClientDataComponent,
    BottomMenuComponent,
    TopMarketMapComponent,
    InsightCardsComponent,
    TrackerComponent,
    WidgetworldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
