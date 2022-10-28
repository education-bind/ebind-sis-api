'use strict';

function cov_2j5jwx50jb() {
  var path = "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_user_engagements.js";
  var hash = "84f8c9a0ad939158c71179990c46214c34605d04";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\models\\edu_user_engagements.js",
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
          line: 30,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 70
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "5": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 30
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
            line: 30,
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
            column: 36
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "84f8c9a0ad939158c71179990c46214c34605d04"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2j5jwx50jb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2j5jwx50jb();
const {
  Model
} = (cov_2j5jwx50jb().s[0]++, require('sequelize'));
cov_2j5jwx50jb().s[1]++;

module.exports = (sequelize, DataTypes) => {
  cov_2j5jwx50jb().f[0]++;

  class edu_user_engagements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      edu_users
    }) {
      cov_2j5jwx50jb().f[1]++;
      cov_2j5jwx50jb().s[2]++;
      this.belongsTo(edu_users, {
        foreignKey: 'userId',
        as: 'user'
      });
    }

    toJSON() {
      cov_2j5jwx50jb().f[2]++;
      cov_2j5jwx50jb().s[3]++;
      return { ...this.get()
      };
    }

  }

  cov_2j5jwx50jb().s[4]++;
  edu_user_engagements.init({
    page: DataTypes.STRING,
    date: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'edu_user_engagements'
  });
  cov_2j5jwx50jb().s[5]++;
  return edu_user_engagements;
};