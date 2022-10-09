import { create } from "middleware-axios/dist";

const api = create({
  baseURL: "http://localhost:8080", // TODO Make it environment variable
});

api.use(async (config, next, defaults) => {
  await next(config);
});

export default api;
