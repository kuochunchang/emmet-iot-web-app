webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <div class=\"card\" >\n      <h3>My Home Control Panel</h3>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Device Dashboard';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subject_list_subject_list_component__ = __webpack_require__("../../../../../src/app/subject-list/subject-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subject_list_subject_subject_component__ = __webpack_require__("../../../../../src/app/subject-list/subject/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subject_list_subject_data_service__ = __webpack_require__("../../../../../src/app/subject-list/subject-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_ui_switch__ = __webpack_require__("../../../../angular2-ui-switch/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_ui_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_ui_switch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var stompConfig = {
    // Which server?
    url: 'ws://iot.emmet-project.com:15674/ws',
    // Headers
    // Typical keys: login, passcode, host
    headers: {
        login: 'emmet',
        passcode: 'masterbuilder'
    },
    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeat_in: 0,
    heartbeat_out: 20000,
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 5000 (5 seconds)
    reconnect_delay: 5000,
    // Will log diagnostics on console
    debug: true
};
var appRoutes = [
    { path: 'subjects/:id', component: __WEBPACK_IMPORTED_MODULE_7__subject_list_subject_subject_component__["a" /* SubjectComponent */] },
    { path: 'subjects', component: __WEBPACK_IMPORTED_MODULE_6__subject_list_subject_list_component__["a" /* SubjectListComponent */] },
    {
        path: '',
        redirectTo: '/subjects',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__subject_list_subject_list_component__["a" /* SubjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__subject_list_subject_subject_component__["a" /* SubjectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__topic_topic_component__["a" /* TopicComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_ui_switch__["UiSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__subject_list_subject_data_service__["a" /* SubjectDataService */],
                __WEBPACK_IMPORTED_MODULE_10__stomp_ng2_stompjs__["b" /* StompService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__stomp_ng2_stompjs__["a" /* StompConfig */],
                    useValue: stompConfig
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subject-list/subject-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubjectDataService = (function () {
    function SubjectDataService() {
        this.subjects = [{
                "id": "bathroom",
                "name": "Bathroom",
                "topics": [{
                        "id": "temperature",
                        "name": "Tempareture",
                        "status": "view.bathroom.temperature.status"
                    },
                    {
                        "id": "humidity",
                        "name": "Humidity",
                        "status": "view.bathroom.humidity.status"
                    },
                    {
                        "id": "fan",
                        "name": "Fan",
                        "status": "view.bathroom.fan.status"
                    }, {
                        "id": "power",
                        "name": "Power",
                        "status": "view.bathroom.power.status",
                        "update": "view.bathroom.power.update"
                    }]
            }, {
                "id": "livingroom",
                "name": "Living Room",
                "topics": [{
                        "id": "temperature",
                        "name": "Tempareture",
                        "status": "view.livingroom.temperature.status"
                    },
                    {
                        "id": "humidity",
                        "name": "Humidity",
                        "status": "view.livingroom.humidity.status"
                    },
                    {
                        "id": "light",
                        "name": "Light",
                        "status": "view.livingroom.light.status"
                    }]
            }];
    }
    SubjectDataService.prototype.getSubject = function (id) {
        for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
            var subject = _a[_i];
            if (subject.id === id) {
                return subject;
            }
        }
        return null;
    };
    SubjectDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SubjectDataService);
    return SubjectDataService;
}());



/***/ }),

/***/ "../../../../../src/app/subject-list/subject-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subject-list/subject-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <h4>Subjects</h4>\n\n  </div>\n\n  <div class=\"panel panel-default\" *ngFor=\"let subject of subjects; let idx = index\" (click)=\"selectSubject(subject.id)\">\n    <div class=\"panel-heading\">{{subject.name}}</div>\n    <div class=\"panel-body\">\n      <div *ngFor=\"let topic of subjects[idx].topics\">\n        <div class=\"row\">\n          <div class=\"col-sm\" style=\"padding-left:15px;\">\n            <span class=\"label label-success\">{{topic.name}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/subject-list/subject-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject_data_service__ = __webpack_require__("../../../../../src/app/subject-list/subject-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectListComponent = (function () {
    function SubjectListComponent(router, subjectDataService) {
        this.router = router;
        this.subjectDataService = subjectDataService;
    }
    SubjectListComponent.prototype.ngOnInit = function () {
        this.subjects = [this.subjectDataService.subjects[0], this.subjectDataService.subjects[1]];
    };
    SubjectListComponent.prototype.selectSubject = function (id) {
        this.router.navigateByUrl('/subjects/' + id);
    };
    SubjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__("../../../../../src/app/subject-list/subject-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subject-list/subject-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__subject_data_service__["a" /* SubjectDataService */]])
    ], SubjectListComponent);
    return SubjectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subject-list/subject/subject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subject-list/subject/subject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div>\n    <H4>Subject: {{name}}</H4>\n  </div>\n  <div>\n    <H5>Topics:</H5>\n  </div> \n  <div *ngFor=\"let topic of subject.topics\">\n    <app-topic [topic]=\"topic\" [subject]=\"id\"></app-topic>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/subject-list/subject/subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject_data_service__ = __webpack_require__("../../../../../src/app/subject-list/subject-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectComponent = (function () {
    function SubjectComponent(route, subjectDataService) {
        this.route = route;
        this.subjectDataService = subjectDataService;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.subject = this.subjectDataService.getSubject(this.id);
        this.name = this.subject.name;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SubjectComponent.prototype, "id", void 0);
    SubjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__("../../../../../src/app/subject-list/subject/subject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subject-list/subject/subject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__subject_data_service__["a" /* SubjectDataService */]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\"><b>{{topic.name}}:</b>\n    <span [class]=\"online=='online'?'label label-success':'label label-default'\">{{online}}</span>\n  </div>\n  <div class=\"panel-body\">\n    <h4>{{value}}</h4>\n    <div *ngIf=\"controllable\">\n      <ui-switch size=\"small\" color=\"green\" [(ngModel)]=\"onoff\"  (change)=onUpdateRequestEmmit()></ui-switch>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicComponent = (function () {
    function TopicComponent(stompService) {
        var _this = this;
        this.stompService = stompService;
        /** Consume a message from the _stompService */
        this.on_next = function (message) {
            // Log it to the console
            var msgBody = JSON.parse(message.body);
            _this.value = msgBody.value;
            _this.online = msgBody.online ? "online" : "offine";
            if (_this.controllable) {
                _this.onoff = _this.value == true ? true : false;
            }
            //console.log(this.value);
            console.log(message);
        };
    }
    TopicComponent.prototype.ngOnInit = function () {
        this.onoff = false;
        this.subscribed = false;
        this.online = "offline";
        this.controllable = this.topic.update !== undefined;
        // Store local reference to Observable
        // for use with template ( | async )
        this.subscribe();
        console.log("-->" + this.onoff);
    };
    TopicComponent.prototype.onUpdateRequestEmmit = function ($event) {
        this.onoff = !this.onoff;
        this.value = "waiting...";
        var request;
        request = { subject: this.subject, timestamp: Date.now() / 1000 | 0, topic: this.topic.id, value: String(this.onoff) };
        this.stompService.publish(this.topic.update, JSON.stringify(request));
        console.log(this.onoff);
    };
    TopicComponent.prototype.subscribe = function () {
        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.messages = this.stompService.subscribe('/topic/' + this.topic.status);
        // Subscribe a function to be run on_next message
        this.subscription = this.messages.subscribe(this.on_next);
        this.subscribed = true;
    };
    TopicComponent.prototype.unsubscribe = function () {
        if (!this.subscribed) {
            return;
        }
        // This will internally unsubscribe from Stomp Broker
        // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
        this.subscription.unsubscribe();
        this.subscription = null;
        this.messages = null;
        this.subscribed = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TopicComponent.prototype, "subject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TopicComponent.prototype, "topic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TopicComponent.prototype, "onoff", void 0);
    TopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topic',
            template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topic/topic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stomp_ng2_stompjs__["b" /* StompService */]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map