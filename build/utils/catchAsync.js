"use strict";

function cov_20cby4c9mx() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\catchAsync.js";
  var hash = "50018a17de60b9ab7ceb407c8b5caf62534f35c3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\catchAsync.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 5,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 4
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 17
          },
          end: {
            line: 1,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1,
            column: 25
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 2,
            column: 9
          },
          end: {
            line: 2,
            column: 10
          }
        },
        loc: {
          start: {
            line: 2,
            column: 29
          },
          end: {
            line: 4,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "50018a17de60b9ab7ceb407c8b5caf62534f35c3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20cby4c9mx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20cby4c9mx();
cov_20cby4c9mx().s[0]++;

module.exports = fn => {
  cov_20cby4c9mx().f[0]++;
  cov_20cby4c9mx().s[1]++;
  return (req, res, next) => {
    cov_20cby4c9mx().f[1]++;
    cov_20cby4c9mx().s[2]++;
    fn(req, res, next).catch(next);
  };
};