"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cov_13oww33thx() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\systemUserTypes.js";
  var hash = "2964e4b59cdf2a92364ecfe13a8ba499cbf129ac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\systemUserTypes.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2964e4b59cdf2a92364ecfe13a8ba499cbf129ac"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13oww33thx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_13oww33thx();
var _default = {
  educationBindUser: "ebind",
  studentUser: "student",
  schoolUser: "school",
  communityUser: "community"
};
exports.default = _default;
module.exports = exports.default;