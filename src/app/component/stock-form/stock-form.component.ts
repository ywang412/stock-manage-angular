import {Component, OnInit} from '@angular/core';
import {Stock} from '../../model/stock';

@Component({
    selector: 'app-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    stock: Stock;

    constructor() {
    }

    ngOnInit() {
        this.stock = new Stock(1, '腾讯控股', 1.99, 3.5, '深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。', ['互联网', 'IT']);
    }

}
