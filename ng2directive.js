import {onChange} from 'angular2/angular2'


@Directive({
    selector: '[focus-on]',
    properties: ['focusOn'],
    lifeCycle: [onChange]
})
class FocusOn {
    el: any;
    constructor(element: ElementRef) {
        this.el = element.domElement;
    }

    onChange() {
        if (this.focusOn) {
            this.el.focus();
        }
    }
}