import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

    @Input()
    rating: number;

    stars: Array<boolean>;

    constructor() {
        this.rating = 0;
        this.stars = [];
    }

    ngOnInit() {
        for (let i = 0; i < 5; i ++) {
            this.stars.push(i >= this.rating);
        }
    }

}
