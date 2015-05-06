import {Component, View, bootstrap} from "angular2/angular2";


@Component({
    selector: 'gift'
})
@View({
    // templateUrl can be used as well
    template: '<h1>Thanks!</h1><content></content>'
})
class Gift{}

export {Gift};
// Same as above:
// export class Gift{}