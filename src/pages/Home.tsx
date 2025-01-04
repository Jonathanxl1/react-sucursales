import { useEffect, useState } from "react";
import {
  deleteDelegation,
  getDelegations,
} from "../services/delegations.service";
import { NavLink } from "react-router";

interface DelegationDTO {
  id: number;

  name: string;

  email: string;

  description: string;

  city_id: number;

  latitude: number;

  longitude: number;

  telephone: number;

  address: string;

  image: string;
}

function Home() {
  let [delegations, SetDelegations] = useState<Array<DelegationDTO>>([]);

  useEffect(() => {
    getDelegations().then((data) => SetDelegations(data));
  }, []);

  function deletePopup(id: number) {
    let result = confirm("Do you want Delete this delegation? *DONT RECOVER");

    if (result) {
      deleteDelegation(id);
    }
  }
  return (
    <>
      <div className="container mx-auto p-4">
        {delegations.length ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">
              Delegations Table
            </h1>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {delegations.map((delegation, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-3 px-6">{delegation.name}</td>
                    <td className="py-3 px-6">{delegation.email}</td>
                    <td className="py-3 px-6 space-x-3">
                      <span className="bg-green-600 h-full w-2/3 text-white p-2 cursor-pointer">
                        <NavLink to={`/edit/${delegation.id}`}>Editar</NavLink>
                      </span>
                      <span
                        onClick={() => deletePopup(delegation.id)}
                        className="bg-red-600 h-full w-2/3 text-white p-2 cursor-pointer">
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="p-4 flex justify-center">
                <tr>
                  <td colSpan={3}>
                    <NavLink to="/create">
                      <span className="bg-red-600 h-full w-2/3 text-white p-2 cursor-pointer">
                        Add Delegations
                      </span>
                    </NavLink>
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        ) : (
          <h1 className="text-2xl font-bold mb-4 text-center">
            Por favor Inicia Sesion
          </h1>
        )}
      </div>
    </>
  );
}

export default Home;
