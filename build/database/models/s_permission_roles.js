'use strict';

function cov_18ivp4854d() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_permission_roles.js";
  var hash = "2601d8e95bc7a8097268070de2b7c5dfbe3b7bea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\s_permission_roles.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 24
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "3": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 5,
            column: 18
          }
        },
        loc: {
          start: {
            line: 5,
            column: 43
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 29
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2601d8e95bc7a8097268070de2b7c5dfbe3b7bea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18ivp4854d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_18ivp4854d();
const {
  Model
} = (cov_18ivp4854d().s[0]++, require('sequelize'));
cov_18ivp4854d().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_18ivp4854d().f[0]++;

  class s_permission_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here

      cov_18ivp4854d().f[1]++;
    }

  }

  cov_18ivp4854d().s[2]++;
  s_permission_roles.init({
    schoolRoleId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    eduPermissionId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 's_permission_roles'
  });
  cov_18ivp4854d().s[3]++;
  return s_permission_roles;
};