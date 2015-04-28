import {Component, Template, bootstrap} from 'angular2/angular2'

@Component({
   selector: 'app'
})

@Template({
   url: "templates/app.html"
})

class App {
   constructor() {

   }
}

export function main() {
   bootstrap(App)
}