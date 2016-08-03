"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dropdown_1 = require('../configs/schemas/dropdown');
var platform_browser_1 = require('@angular/platform-browser');
var DropDownComponent = (function () {
    // public to_sanatize:Dropdown;
    function DropDownComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.clicked = false;
        this.subClicked = false;
        // this.drop['style'] = sanitizer.bypassSecurityTrustStyle(this.to_sanatize);
        // console.log(this.to_sanatize);
    }
    DropDownComponent.prototype.ngOnInit = function () {
        this.drop['style'] = this.sanitizer.bypassSecurityTrustStyle(this.drop['style']);
    };
    DropDownComponent.prototype.event_prevent = function (e, sub_opt) {
        if (sub_opt) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    DropDownComponent.prototype.open_suboptions = function (condition) {
        if (condition) {
            this.clicked = !this.clicked;
        }
        if (this.drop['change_title']) {
            this.drop['text'] = this.drop['options']['left_text'];
        }
    };
    DropDownComponent.prototype.open_subSuboptions = function (condition) {
        if (condition) {
            this.subClicked = !this.subClicked;
        }
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', dropdown_1.Dropdown)
    ], DropDownComponent.prototype, "drop", void 0);
    DropDownComponent = __decorate([
        core_1.Component({
            selector: 'drop-down',
            templateUrl: "app/components/drop-down/drop-down.component.html",
            styleUrls: ["app/components/drop-down/drop-down.component.css"]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], DropDownComponent);
    return DropDownComponent;
}());
exports.DropDownComponent = DropDownComponent;
//# sourceMappingURL=drop-down.component.js.map