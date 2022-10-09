import { CookieOptions } from "express";
import * as jwt from "jsonwebtoken";
import ms from "ms";

interface DecodedPayload {
  owner_id: number;
}

export class jwtHelper {
  private static SECRET_KEY: jwt.Secret = process.env.SECRET_KEY || "#0sdi0XSd";

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
    const token = jwt.sign(payload, this.SECRET_KEY, options);
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
      const decoded = jwt.verify(token, this.SECRET_KEY);
      return decoded as DecodedPayload;
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
