/// <reference src="typings/tsd.d.ts">

import {CORE_DIRECTIVES, Component, View, bootstrap} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet} from "angular2/router";
import {bind, Injectable} from "angular2/di";

import Typeahead from "./ngTypeahead";


@Component({
    selector: "app"
})
@View({
    directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],
    template: `
        <main>
            <typeahead dataset="substringMatcher(states)" ></typeahead>
        </main>
    `
})
class App {
     states:string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    substringMatcher(strs) {
          return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];     

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
              if (substrRegex.test(str)) {
                matches.push(str);
              }
            });

            cb(matches);
          };
    };
    constructor(){
      console.log("app started");
    }
}

bootstrap(App, [
    HTTP_BINDINGS,
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);

