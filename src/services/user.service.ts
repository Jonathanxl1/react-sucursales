import { api } from "./init.service";

export async function getUser() {
  let { data } = await api.get("/user");
  return data;
}
