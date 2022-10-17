import { create } from "middleware-axios/dist";
import Cookies from "js-cookie";

const api = create({
  baseURL: process.env.BACKEND_BASE_URL || "http://localhost:8080", // TODO Make it environment variable
});

api.use(async (config, next, defaults) => {
  const token = Cookies.get("access_token");
  if (token !== undefined) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  await next(config);
});

export default api;
