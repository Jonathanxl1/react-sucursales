import { api } from "./init.service";

export async function getDelegations() {
  let { data } = await api.get("/sucursal");

  return data;
}

export async function createDelegation(body: any) {
  let { data } = await api.post("/sucursal");

  return data;
}

export async function putDelegations(id: number, body: any) {
  let { data } = await api.put(`/sucursal/${id}`, body);
  return data;
}

export async function deleteDelegation(id: number) {
  let { data } = await api.delete(`/sucursal/${id}`);

  return data;
}
