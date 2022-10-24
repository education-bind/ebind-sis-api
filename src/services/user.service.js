import catchAsync from "../utils/catchAsync";
import systemUserTypes from "../utils/systemUserTypes";
import db from "../database/models";

const { edu_admin_user_infos, student_infos, s_user_infos, c_user_infos } = db;

const { educationBindUser, studentUser, communityUser, schoolUser } =
  systemUserTypes;

export const userExtraInfo = (name, userId) => {
  return new Promise(
    catchAsync(async (resolve) => {
      let gottenUser;

      switch (name) {
        case educationBindUser:
          gottenUser = await edu_admin_user_infos.findOne({
            where: { userId },
            attributes: {
              exclude: [
                "userId",
                "verificationToken",
                "updatedAt",
                "createdAt",
              ],
            },
          });
          gottenUser = gottenUser.dataValues;
          break;

        case studentUser:
          gottenUser = await student_infos.findOne({
            where: { userId },
            attributes: {
              exclude: ["userId", "updatedAt", "createdAt"],
            },
          });

          gottenUser = gottenUser.dataValues;
          break;

        case communityUser:
          gottenUser = await c_user_infos.findOne({
            where: { userId },
            attributes: {
              exclude: ["userId", "updatedAt", "createdAt"],
            },
          });

          gottenUser = gottenUser.dataValues;
          break;

        case schoolUser:
          gottenUser = await s_user_infos.findOne({
            where: { userId },
            attributes: {
              exclude: ["userId", "updatedAt", "createdAt"],
            },
          });

          gottenUser = gottenUser.dataValues;
          break;

        default:
          break;
      }
      return resolve(gottenUser);
    })
  );
};
