"use strict";

function cov_2r4yq9li8p() {
  var path =
    "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\config\\config.js";
  var hash = "bb3ce80767eea3c88aaeb6938a12bc52f2a4cb42";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Eddy\\Documents\\GitHub\\ebind-backend\\src\\database\\config\\config.js",
    statementMap: {
      0: {
        start: {
          line: 1,
          column: 15,
        },
        end: {
          line: 1,
          column: 32,
        },
      },
      1: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 16,
        },
      },
      2: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 15,
        },
      },
      3: {
        start: {
          line: 15,
          column: 22,
        },
        end: {
          line: 24,
          column: 1,
        },
      },
      4: {
        start: {
          line: 16,
          column: 2,
        },
        end: {
          line: 23,
          column: 9,
        },
      },
      5: {
        start: {
          line: 26,
          column: 0,
        },
        end: {
          line: 62,
          column: 2,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 22,
          },
          end: {
            line: 15,
            column: 23,
          },
        },
        loc: {
          start: {
            line: 15,
            column: 28,
          },
          end: {
            line: 24,
            column: 1,
          },
        },
        line: 15,
      },
    },
    branchMap: {
      0: {
        loc: {
          start: {
            line: 16,
            column: 9,
          },
          end: {
            line: 23,
            column: 8,
          },
        },
        type: "cond-expr",
        locations: [
          {
            start: {
              line: 17,
              column: 6,
            },
            end: {
              line: 22,
              column: 7,
            },
          },
          {
            start: {
              line: 23,
              column: 6,
            },
            end: {
              line: 23,
              column: 8,
            },
          },
        ],
        line: 16,
      },
    },
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    f: {
      0: 0,
    },
    b: {
      0: [0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bb3ce80767eea3c88aaeb6938a12bc52f2a4cb42",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2r4yq9li8p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2r4yq9li8p();
const dotenv = (cov_2r4yq9li8p().s[0]++, require("dotenv"));
cov_2r4yq9li8p().s[1]++;
dotenv.config();
const {
  PRODUCTION_DATABASE,
  DEV_DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  TEST_DATABASE,
  TEST_GIT_ACTIONS,
} = (cov_2r4yq9li8p().s[2]++, process.env);
cov_2r4yq9li8p().s[3]++;

const dialectToggle = () => {
  cov_2r4yq9li8p().f[0]++;
  cov_2r4yq9li8p().s[4]++;
  return TEST_GIT_ACTIONS == "true"
    ? (cov_2r4yq9li8p().b[0][0]++,
      {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      })
    : (cov_2r4yq9li8p().b[0][1]++, {});
};

cov_2r4yq9li8p().s[5]++;
module.exports = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DEV_DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: "postgres",
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: TEST_DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: "postgres",
    logging: false,
    protocol: "postgres",
    dialectOptions: dialectToggle(),
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: PRODUCTION_DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    logging: false,
    protocol: "postgres",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
