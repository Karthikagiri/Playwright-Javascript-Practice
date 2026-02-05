"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environment;
(function (Environment) {
    Environment["DEV"] = " DEV Environment";
    Environment["STAGE"] = " STAGE Environment";
    Environment["PROD"] = " PROD Environment";
    Environment["LOCAL"] = " LOCAL Environment";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log('Testing in ' + env);
}
runTests(Environment.PROD);
runTests(Environment.DEV);
runTests(Environment.STAGE);
runTests(Environment.LOCAL);
