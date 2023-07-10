// Karena sekarang kita ingin mengambil data pada saat Component ini dibuat
// Kita harus menggunakan useEffect
import { useEffect, useState } from "react";
import TableSectionRow from "./TableSectionRow";

const TableSection = () => {
  // State untuk tarikan data external
  const [identities, setIdentities] = useState([]);

  // Fungsi "onComponentCreated" / "created"
  // Menerima 2 parameter:
  // - Parameter pertama adalah Fungsi yang akan dipanggil (Callback Fn)
  // - Parameter kedua adalah dependency list berupa array of state
  //   (Apabila hanya ingin dipanggil sekali, gunakan array kosong)
  useEffect(
    // Callback Fn
    // Rules: TIDAK BOLEH ADA KATA KATA ASYNC DI SINI !
    () => {
      // Tapi boleh membuat fungsi async di dalam sini
      const fetchDataFromExternal = async () => {
        const response = await fetch("http://localhost:3000/users");
        const responseJson = await response.json();

        setIdentities(responseJson);
      };

      // Jangan lupa fungsinya dipanggil
      fetchDataFromExternal();
    },
    // Dependency List
    []
  );

  return (
    <section className="bg-gray-200 p-4 rounded min-w-[50vw] flex flex-col gap-2 justify-start items-start text-left">
      <h1 className="text-xl">Table Section</h1>

      <table className="table-auto border-collapse border border-emerald-600 mx-auto">
        <thead>
          <tr className="text-center">
            <th className="border p-2 border-emerald-500">Id</th>
            <th className="border border-emerald-500 p-2">Name</th>
            <th className="border border-emerald-500 p-2">Email</th>
            <th className="border border-emerald-500 p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* Looping */}
          {/* Karena di sini adalah javascript */}
          {/* Maka kita akan looping dari identities */}
          {/* Untuk membuat Component table rownya  */}
          {identities.map((identity) => (
            <tr key={identity.id}>
              <td className="border border-emerald-400 text-center p-2">
                {identity.id}
              </td>
              <td className="border border-emerald-400 p-2">{identity.name}</td>
              <td className="border border-emerald-400 p-2">
                {identity.email}
              </td>
              <td className="border border-emerald-400 p-2">
                {identity.phone}
              </td>
            </tr>
          ))}

          {/* Looping - Part 2 */}
          {/* Atau bisa juga kita buat menjadi sebuah component yang benerannya */}
          {/* Tapi di sini kita harus mengirimkan property (props) ke dalam Component yang dibuat */}
          {identities.map((identity) => (
            <TableSectionRow identity={identity} key={identity.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableSection;
