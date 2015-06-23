@Component({
    selector: 'collapsable-address',
    properties: ['address']
})
@View({
    templateUrl: './collapsable-address.html'
})
export class CollapsableAddress {
    isCollapsed = false;
    address: { street: string, city: string, state: string };

    expandAddress() { 
      this.isCollapsed = false; 
    }
    collapseAddress() { 
      this.isCollapsed = true; 
    }
}