import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Numeric } from './components/component';
var NumericModule = (function () {
    function NumericModule() {
    }
    NumericModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Numeric,
                    ],
                    providers: [],
                    exports: [
                        Numeric,
                    ],
                    imports: [],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA,
                    ],
                },] },
    ];
    NumericModule.ctorParameters = function () { return []; };
    return NumericModule;
}());
export { NumericModule };
//# sourceMappingURL=module.js.map