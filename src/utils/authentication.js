import jwt from "jsonwebtoken";
import { setToken } from "../config/redis.config";

export const generateToken = async (id) => {
  async function GenerateRefreshToken(id) {
    const refreshToken = jwt.sign(
      { sub: id },
      process.env.JWT_REFRESH_SECRET,
      {}
    );

    await setToken(id.toString(), JSON.stringify({ refreshToken }));

    return refreshToken;
  }

  const accessToken = jwt.sign({ sub: id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TIME,
  });
  const refreshToken = await GenerateRefreshToken(id);

  return { accessToken, refreshToken };
};
