import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  getCitiesBy,
  getCountries,
  getDeparmentsBy,
} from "../services/locations.service";

function EditDelegations() {
  let [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    country_id: "",
    deparment_id: "",
    city_id: "",
    latitude: "",
    longitude: "",
    telephone: "",
    address: "",
    image: null,
  });

  let [countries, setCountries] = useState<Array<{ id: number; name: string }>>(
    []
  );
  let [deparments, setDeparments] = useState([]);
  let [cities, SetCities] = useState([]);

  function handleInput(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    let { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
    return () => {};
  }, []);

  useEffect(() => {
    setDeparments([]);
    getDeparmentsBy(parseInt(form["country_id"])).then((data) =>
      setDeparments(data)
    );
    return () => {};
  }, [form["country_id"]]);

  useEffect(() => {
    SetCities([]);
    getCitiesBy(parseInt(form["deparment_id"])).then((data) => SetCities(data));
    return () => {};
  }, [form["deparment_id"]]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-[200px] py-4 bg-gray-100">
        <div className="w-4/12 h-8/12 bg-white p-8 rounded-lg shadow-md">
          <h1 className="my-12 text-center">Create Delegations</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => handleInput(e)}
            />
            <textarea
              placeholder="description"
              name="description"
              onChange={(e) => handleInput(e)}></textarea>
            <label>
              Contries
              <select name="country_id" onChange={handleInput}>
                {countries.map(({ id, name }) => {
                  return <option value={id}>{name}</option>;
                })}
              </select>
            </label>

            {form["country_id"] && deparments.length ? (
              <label>
                Deparments
                <select name="deparment_id" onChange={handleInput}>
                  {deparments.map(({ id, name }) => {
                    return <option value={id}>{name}</option>;
                  })}
                </select>
              </label>
            ) : null}

            {form["country_id"] && form["deparment_id"] && deparments.length ? (
              <label>
                Cities
                <select name="city_id" onChange={handleInput}>
                  {cities.map(({ id, name }) => {
                    return <option value={id}>{name}</option>;
                  })}
                </select>
              </label>
            ) : null}

            <label htmlFor="Latitude">Latitude</label>
            <input
              type="text"
              className="input-style"
              name="latitude"
              id=""
              onChange={(e) => handleInput(e)}
            />

            <label htmlFor="Longitude">Latitude</label>
            <input
              type="text"
              className="input-style"
              name="longitude"
              id=""
              onChange={(e) => handleInput(e)}
            />

            <label htmlFor="telephone">Telephone</label>
            <input
              type="tel"
              className="input-style"
              name="telephone"
              id=""
              onChange={(e) => handleInput(e)}
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="input-style"
              name="address"
              id=""
              onChange={(e) => handleInput(e)}
            />

            <label htmlFor="image">Image</label>
            <input type="file" className="" name="image" id="" />

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditDelegations;
