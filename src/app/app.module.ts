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

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        FooterComponent,
        ContentComponent,
        StockManageComponent,
        StarsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
