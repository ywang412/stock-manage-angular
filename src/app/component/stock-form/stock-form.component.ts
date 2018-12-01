import {Component, OnInit} from '@angular/core';
import {Stock} from '../../model/stock';
import {ActivatedRoute, Router} from '@angular/router';
import {StockService} from '../../service/stock.service';

@Component({
    selector: 'app-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    public stock: Stock;

    constructor(private router: Router,
                private routeInfo: ActivatedRoute,
                private stockService: StockService) {
    }

    ngOnInit() {
        const stockId = this.routeInfo.snapshot.params['id'];
        this.stock = this.stockService.getStockById(stockId);
    }

    cancel() {
        this.router.navigateByUrl('/stock');
    }

    save() {
        this.router.navigateByUrl('/stock');
    }
}
