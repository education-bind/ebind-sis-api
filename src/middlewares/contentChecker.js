import db from "../database/models";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import messages from "../utils/customMessages";
import statusCode from "../utils/statusCodes";

const {
  countries,
  edu_permissions,
  edu_user_types,
  edu_languages,
  schools,
  edu_faculties,
} = db;
const { notFound, serverError } = statusCode;
const { noContent, wrongDatabase } = messages;

export const findData = (database) => {
  const findInDatabase = catchAsync(async (databaseTable, id, req, next) => {
    const content = await databaseTable.findOne({
      where: { id, active: true },
    });

    if (!content) {
      return next(new AppError(noContent, notFound));
    }
    req.foundData = content;
    req.databaseTable = databaseTable;
    return next();
  });

  return (req, res, next) => {
    const { id } = req.params;

    switch (database) {
      case "countries":
        return findInDatabase(countries, id, req, next);
      case "edu_permissions":
        return findInDatabase(edu_permissions, id, req, next);
      case "edu_languages":
        return findInDatabase(edu_languages, id, req, next);
      case "edu_user_types":
        return findInDatabase(edu_user_types, id, req, next);
      case "schools":
        return findInDatabase(schools, id, req, next);
      case "edu_faculties":
        return findInDatabase(edu_faculties, id, req, next);
      default:
        return next(new AppError(wrongDatabase, serverError));
    }
  };
};

export const findAllData = (database) => {
  const findInDatabase = catchAsync(async (databaseTable, req, next) => {
    const content = await databaseTable.findAll({
      where: { active: true },
    });
    if (!content) {
      return next(new AppError(noContent, notFound));
    }
    req.foundData = content;
    req.databaseTable = databaseTable;
    return next();
  });

  return (req, res, next) => {
    switch (database) {
      case "countries":
        return findInDatabase(countries, req, next);
      case "edu_permissions":
        return findInDatabase(edu_permissions, req, next);
      case "edu_languages":
        return findInDatabase(edu_languages, req, next);
      case "edu_user_types":
        return findInDatabase(edu_user_types, req, next);
      case "schools":
        return findInDatabase(schools, req, next);
      case "edu_faculties":
        return findInDatabase(edu_faculties, req, next);
      default:
        return next(new AppError(wrongDatabase, serverError));
    }
  };
};
