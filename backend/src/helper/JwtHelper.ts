import { AccessTokenInvalidError } from "../error/Error";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface DecodedPayload {
  owner_id: number;
}

export class jwtHelper {
  private static JWT_SECRET_KEY: jwt.Secret =
    process.env.JWT_SECRET_KEY ||
    "#9e7fa5d9aa6a30a3eebff43b863a9a33452277d9db4865783d6d615f257bb5a0";

  /**
   * Create JsonWebToken.
   *
   * @returns JsonWebToken string
   */
  public static createToken(owner_id: number): string {
    const payload = {
      owner_id,
    };
    const options: jwt.SignOptions = {
      expiresIn: "1d",
    };
    const token = jwt.sign(payload, this.JWT_SECRET_KEY, options);
    return token;
  }

  /**
   * Verify the JsonWebToken and return the decoded payload.
   *
   * @param token JsonWebToken string
   * @returns Decoded payload
   */
  public static verifyToken(token: string): DecodedPayload {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET_KEY);
      return decoded as DecodedPayload;
    } catch (error) {
      throw new AccessTokenInvalidError();
    }
  }
}
