import { api } from "./init.service";

export async function login(login: any) {
  console.log(login);

  let { data } = await api.post("/auth/login", login);
  return data;
}
