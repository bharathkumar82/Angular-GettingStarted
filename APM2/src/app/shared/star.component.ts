import { Component, OnChanges, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 75/5; 
    }

    onClick(): void {
        // Note using Back Ticks variables can inserted in print statements string 
        // Back ticks are also used in @component to embed the template
        console.log(`The rating ${this.rating} was click!`);
        this.ratingClicked.emit(`The rating ${this.rating} was click!`);
    }

}