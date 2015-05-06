import {EventEmitter, Component, View, bootstrap} from "angular2/angular2";


@Component({
    selector: 'donut',
    events: ['open']
})
@View({
    templateUrl: 'donut.html'
})
class Donut{

    // member variables where you can define a class outside of a contructor function
    // this is ES7 proposed feature
    open = new EventEmitter(); 

    onClick() {
        this.open.next();
    }
}

export {Donut}