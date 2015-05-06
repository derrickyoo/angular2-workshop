import {Component, View, bootstrap} from "angular2/angular2";


@Component({
    selector: 'donut'
})
@View({
    templateUrl: 'donut.html'
})
class Donut{

    onClick() {
        alert('DOH-DOH-Donuts!');
    }
}

export {Donut}