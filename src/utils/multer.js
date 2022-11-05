import AppError from "./appError.js";
import cloudinary from "../config/cloudinary.config";
import customMessages from "../utils/customMessages";
import multer from "multer";

const { invalidImage } = customMessages;
const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError(invalidImage, 400), false);
  }
};

export const uploads = multer({ storage, fileFilter });

export const fileUpload = async (req, next) => {
  if (!req.file) return;
  let imageUrl = "";
  await cloudinary.v2.uploader.upload(
    req.file.path,
    async function (err, image) {
      if (err) {
        return next(new AppError(err));
      }
      imageUrl = image.url;
    }
  );
  return imageUrl;
};
