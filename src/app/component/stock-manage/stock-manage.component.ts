import {Component, OnInit} from '@angular/core';
import {Stock} from '../../model/stock';

@Component({
    selector: 'app-stock-manage',
    templateUrl: './stock-manage.component.html',
    styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

    stocks: Array<Stock>;

    constructor() {
    }

    ngOnInit() {
        this.stocks = [
            new Stock(1, '腾讯控股', 1.99, 3.5, '深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。', ['互联网', 'IT']),
            new Stock(2, '阿里巴巴', 2.99, 4.5, '阿里巴巴网络技术有限公司是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立。', ['互联网', '电商']),
            new Stock(3, '百度', 3.99, 2.5, '百度公司是一家主要经营搜索引擎服务的互联网公司，于2000年1月1日由李彦宏、徐勇两人创立于北京中关村。', ['互联网', '信息']),
            new Stock(4, '京东', 4.99, 1.5, '京东，中国自营式电商企业，创始人刘强东担任京东集团董事局主席兼首席执行官。', ['互联网', '电商']),
            new Stock(5, '美团点评', 5.99, 2, '美团点评是中国大陆地区第一个精品团购形式的类Groupon电子商务网站。最初叫美团网，和大众点评网合并后改为现在的名字。', ['互联网', 'IT'])
        ];
    }

}
