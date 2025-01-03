import { api } from "./init.service";

export async function getCompany(appId: number) {
  let { data } = await api.get(`/empresa/${appId}`);
  return data;
}
