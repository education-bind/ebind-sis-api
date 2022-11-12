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
  notification_types,
  notifications,
  edu_announcements,
} = db;
const { notFound, serverError } = statusCode;
const { noContent, wrongDatabase } = messages;

export const findData = (database) => {
  let id, req, res, next, databaseTable;
  const findInDatabase = catchAsync(async () => {
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

  return (request, response, nextFunction) => {
    req = request;
    res = response;
    next = nextFunction;
    id = req.params.id;

    switch (database) {
      case "countries":
        databaseTable = countries;
        return findInDatabase();
      case "edu_permissions":
        databaseTable = edu_permissions;
        return findInDatabase();
      case "edu_languages":
        databaseTable = edu_languages;
        return findInDatabase();
      case "edu_user_types":
        databaseTable = edu_user_types;
        return findInDatabase();
      case "schools":
        databaseTable = schools;
        return findInDatabase();
      case "edu_faculties":
        databaseTable = edu_faculties;
        return findInDatabase();
      case "notification_types":
        databaseTable = notification_types;
        return findInDatabase();
      case "notifications":
        databaseTable = notifications;
        return findInDatabase();
      case "edu_announcements":
        databaseTable = edu_announcements;
        return findInDatabase();
      default:
        return next(new AppError(wrongDatabase, serverError));
    }
  };
};

export const findAllData = (database) => {
  let req, res, next, databaseTable;
  const findInDatabase = catchAsync(async () => {
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

  return (request, response, nextFunction) => {
    req = request;
    res = response;
    next = nextFunction;
    switch (database) {
      case "countries":
        databaseTable = countries;
        return findInDatabase();
      case "edu_permissions":
        databaseTable = edu_permissions;
        return findInDatabase();
      case "edu_languages":
        databaseTable = edu_languages;
        return findInDatabase();
      case "edu_user_types":
        databaseTable = edu_user_types;
        return findInDatabase();
      case "schools":
        databaseTable = schools;
        return findInDatabase();
      case "edu_faculties":
        databaseTable = edu_faculties;
        return findInDatabase();
      case "notification_types":
        databaseTable = notification_types;
        return findInDatabase();
      case "notifications":
        databaseTable = notifications;
        return findInDatabase();
      case "edu_announcements":
        databaseTable = edu_announcements;
        return findInDatabase();
      default:
        return next(new AppError(wrongDatabase, serverError));
    }
  };
};
