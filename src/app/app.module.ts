import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {MenuComponent} from './component/menu/menu.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {FooterComponent} from './component/footer/footer.component';
import {ContentComponent} from './component/content/content.component';
import {StockManageComponent} from './component/stock-manage/stock-manage.component';
import {StarsComponent} from './component/stars/stars.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {StockFormComponent} from './component/stock-form/stock-form.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'stock', component: StockManageComponent},
    {path: 'stock/:id', component: StockFormComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        FooterComponent,
        ContentComponent,
        StockManageComponent,
        StarsComponent,
        DashboardComponent,
        StockFormComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
