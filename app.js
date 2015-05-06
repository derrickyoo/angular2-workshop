import {For, If, Component, View, bootstrap} from "angular2/angular2";
import {Donut} from 'donut';


@Component({
    selector: 'vegas-app'
})
@View({
    directives: [Donut, For, If],
    template: `
        <div>
            <h1>Hello Ng-Vegas</h1>
            <donut (open)="onOpen()">This content is displayed by adding <code> content HTML element to the <strong>donut</strong> component template.</code></donut>
            <ul>
                <li *for="#note of notes" (click)="onNoteClick(note)">{{note}}</li>
            </ul>
            <div *if="notes.length > 0">You have notes!</div>
        </div>
    `
})
class VegasApp{
    notes = ['ES6 is fun', 'This is the best workshop', 'ng-vegas'];

    onOpen() {
        console.log('DOH-DOH-Donuts from app!');
    }

    onNoteClick(value) {
        console.log(value);
    } 
}

bootstrap(VegasApp);