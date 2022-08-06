import { CookieOptions } from "express";
import * as jwt from "jsonwebtoken";
import ms from "ms";

export class jwtHelper {
  private static SECRET_KEY: jwt.Secret = process.env.SECRET_KEY || "#0sdi0XSd";

  /**
   * Create JsonWebToken.
   *
   * @returns JsonWebToken string
   */
  public static createToken(): string {
    const payload = {};
    const options: jwt.SignOptions = {
      expiresIn: "1d",
    };
    const token = jwt.sign(payload, this.SECRET_KEY, options);
    return token;
  }

  /**
   * Verify the JsonWebToken and return the decoded payload.
   *
   * @param token JsonWebToken string
   * @returns Decoded payload
   */
  public static verifyToken(token: string): string | jwt.JwtPayload {
    try {
      const decoded = jwt.verify(token, this.SECRET_KEY);
      return decoded;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get cookie options.
   *
   * @returns Cookie options
   */
  public static getCookieOptions(): CookieOptions {
    return {
      httpOnly: true,
      expires: new Date(Date.now() + ms("1d")),
    };
  }
}
