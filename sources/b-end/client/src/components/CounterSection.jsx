// Karena di sini kita harus memiliki state / data yang akan berubah
// maka kita harus menggunakan useState dari React
import { useState } from "react";

const CounterSection = () => {
  // Declare useState di dalam sini
  // useState adalah sebuah fungsi yang akan:
  // - MENERIMA (args) initial value dari state yang dideklarasikan
  // - MENGEMBALIKAN (return) tuple / array yang memliki 2 indeks:
  //   - Indeks Pertama adalah value dari statenya sekarang
  //   - Indeks Kedua adalah function yang berguna untuk meng-set statenya
  const [counter, setCounter] = useState(10);

  // Karena ini sifatnya adalah JSX
  // Maka untuk membuat fungsi untuk event (onClick dll dkk)
  // Tinggal dibuat saja layaknya fungsi yang biasa
  const buttonOnClickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <section className="bg-gray-200 p-4 rounded min-w-[50vw] flex flex-col gap-2 text-left">
      <h1 className="text-xl">Counter Section</h1>
      <p>Current Counter is: {counter}</p>

      {/* Karena button ini ada event ketika tombol ditekan-nya */}
      {/* Maka kita akan menggunakan onClick dari bawaan React */}
      {/* Perhatikan di sini kita menggunakan onClick untuk memanggil */}
      {/* function buttonOnClickHandler */}
      <button
        className="bg-sky-100 hover:bg-sky-400 hover:text-white transitions-color duration-300 py-2 px-4 rounded"
        onClick={buttonOnClickHandler}
      >
        Increment
      </button>
    </section>
  );
};

export default CounterSection;
