import {Component, View, bootstrap} from "angular2/angular2";
import {Donut} from 'donut';


@Component({
    selector: 'vegas-app'
})
@View({
    directives: [Donut],
    template: `
        <div>
            <h1>Hello Ng-Vegas</h1>
            <donut>This content is displayed by adding <code> content HTML element to the <strong>donut</strong> component template.</code></donut>
        </div>
    `
})
class VegasApp{}

bootstrap(VegasApp);