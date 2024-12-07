import { Component } from '@angular/core';
import { ItemService, Item } from '../../services/item.service';

@Component({
    selector: 'app-item-add',
    templateUrl: './item-add.component.html',
    styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
    name = '';
    description = '';

    constructor(private itemService: ItemService) {}

    addItem(): void {
        const newItem: Item = { id: 0, name: this.name, description: this.description };
        this.itemService.addItem(newItem).subscribe(() => {
            this.name = '';
            this.description = '';
        });
    }
}
