import { api } from "./init.service";

export async function getCountries() {
  let { data } = await api.get("/countries");
  return data;
}

export async function getDeparmentsBy(countryId: number) {
  let { data } = await api.get(`/deparments/${countryId}`);
  return data;
}

export async function getCitiesBy(deparmentId: number) {
  let { data } = await api.get(`/cities/${deparmentId}`);
  return data;
}
