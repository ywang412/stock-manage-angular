import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Menu} from '../../model/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menus: Array<Menu>;

    currentMenuId: number;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.menus = [
            new Menu(1, '首页', 'dashboard'),
            new Menu(2, '股票管理', 'stock')
        ];
        this.currentMenuId = this.menus[0].id;
    }

    nav(menu: Menu) {
        this.router.navigateByUrl(menu.link);
        this.currentMenuId = menu.id;
    }

}
