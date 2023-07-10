/* eslint-disable react/prop-types */

// Bagaimanakah cara untuk menerima props yang ada?
// Ya, karena ini adalah suatu "Function Component"
// Terimanya lewat.... parameters !
// Lebih tepatnya pada parameter pertama di dalam Function Component ini
// Merupakan suatu "object" yang bisa di-destructuring
// Karena tadi di passing dengan nama "identity"
// maka di sini kita akan destructure parameter pertama dan menerima "identity"
const TableSectionRow = ({ identity }) => {
  return (
    <tr>
      <td className="border border-emerald-400 text-center p-2">
        {identity.id}
      </td>
      <td className="border border-emerald-400 p-2">{identity.name}</td>
      <td className="border border-emerald-400 p-2">{identity.email}</td>
      <td className="border border-emerald-400 p-2">{identity.phone}</td>
    </tr>
  );
};

export default TableSectionRow;
