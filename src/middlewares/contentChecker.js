import db from "../database/models";
import AppError from "../utils/appError";
import messages from "../utils/customMessages";
import statusCode from "../utils/statusCodes";

const { countries, edu_permissions, edu_user_types, edu_languages } = db;
const { notFound, serverError } = statusCode;
const { noContent, wrongDatabase } = messages;

export const findData = (database) => {
  const findInDatabase = async (databaseTable, id, req, next) => {
    try {
      const content = await databaseTable.findOne({
        where: { id, active: true },
      });

      if (!content) {
        return next(new AppError(noContent, notFound));
      }
      req.foundData = content;
      req.databaseTable = databaseTable;
      return next();
    } catch (error) {
      return next(new AppError(error));
    }
  };

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
      default:
        return next(new AppError(wrongDatabase, serverError));
    }
  };
};

export const findAllData = (database) => {
  const findInDatabase = async (databaseTable, req, next) => {
    try {
      const content = await databaseTable.findAll({
        where: { active: true },
      });
      if (!content) {
        return next(new AppError(noContent, notFound));
      }
      req.foundData = content;
      req.databaseTable = databaseTable;
      return next();
    } catch (error) {
      return next(new AppError(error));
    }
  };

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
      default:
        return next(new AppError(wrongDatabase, serverError));
    }
  };
};
