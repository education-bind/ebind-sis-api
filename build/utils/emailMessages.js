"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyMessage = exports.resetMessage = exports.changedMessage = void 0;

function cov_tnk2z9whc() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\emailMessages.js";
  var hash = "22feb1f2197150b55c425052ab4d412b103e839b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\utils\\emailMessages.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 21
        },
        end: {
          line: 5,
          column: 3
        }
      },
      "1": {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 17,
          column: 3
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "22feb1f2197150b55c425052ab4d412b103e839b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tnk2z9whc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_tnk2z9whc();
const resetMessage = (cov_tnk2z9whc().s[0]++, {
  intro: 'You recently requested to reset the password for your barefoot account',
  instruction: 'To reset the password, please click the following button ',
  text: 'Reset Password'
});
exports.resetMessage = resetMessage;
const changedMessage = (cov_tnk2z9whc().s[1]++, {
  intro: 'Reset password is successfully completed',
  instruction: 'To login with new password, please click the following button ',
  text: 'You can login'
});
exports.changedMessage = changedMessage;
const verifyMessage = (cov_tnk2z9whc().s[2]++, {
  intro: 'Congratulations, you successfully created the account!',
  instruction: 'Confirm your account by clicking on below button',
  text: 'Confirm'
});
exports.verifyMessage = verifyMessage;