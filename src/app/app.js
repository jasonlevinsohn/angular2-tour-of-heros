var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heros';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = HEROES;
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor],
            template: "\n        <h1>{{title}}</h1>\n        <h2>My Heros</h2>\n        <ul class=\"heroes\">\n            <li *ng-for=\"#hero of heroes\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n            <label>name: </label>\n            <div><input [(ng-model)]=\"hero.name\" placeholder=\"name\"></div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
var HEROES = [
    { 'id': 11, 'name': 'Mr. Nice' },
    { 'id': 12, 'name': 'Narco' },
    { 'id': 13, 'name': 'Bombasto' },
    { 'id': 14, 'name': 'Celeritas' },
    { 'id': 15, 'name': 'Magneta' },
    { 'id': 16, 'name': 'RubberMan' },
    { 'id': 17, 'name': 'Dynama' },
    { 'id': 18, 'name': 'Dr IQ' },
    { 'id': 19, 'name': 'Magma' },
    { 'id': 20, 'name': 'Tornado' }
];
//# sourceMappingURL=app.js.map