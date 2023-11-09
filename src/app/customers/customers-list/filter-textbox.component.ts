import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter" />
    `
})

export class FilterTextboxComponent implements OnInit {
    
    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }
    
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }

    // 'changed' is of type EventEmitter
    // EventEmitter is a way in Angular to send data up to parent from a child
    // in this case we're sending up <string> data, a single value
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    // EventEmitter<string> is a TypeScript 'generic'
    constructor() {}

    ngOnInit(): void {
        
    }
}