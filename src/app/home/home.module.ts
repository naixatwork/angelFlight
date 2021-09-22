import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroComponent} from './components/hero/hero.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ServicesComponent} from './components/services/services.component';
import {VisaComponent} from './components/visa/visa.component';
import {VisaService} from "./components/visa/visa.service";
import {MatDividerModule} from "@angular/material/divider";
import {MatRippleModule} from "@angular/material/core";
import { FAQComponent } from './components/faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  providers: [VisaService],
  declarations: [
    HomeComponent,
    HeroComponent,
    ServicesComponent,
    VisaComponent,
    FAQComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatRippleModule,
        MatExpansionModule
    ],
})
export class HomeModule {
}
