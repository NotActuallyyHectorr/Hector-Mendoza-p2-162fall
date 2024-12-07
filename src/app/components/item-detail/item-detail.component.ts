import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Item } from '../../services/item.service';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
    item?: Item;

    constructor(private route: ActivatedRoute, private itemService: ItemService) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.itemService.getItem(id).subscribe((data) => (this.item = data));
    }
}
