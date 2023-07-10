import { useState } from "react";

const FormSection = () => {
  // Ingat karena value yang ada di dalam form adalah data yang akan digunakan di React
  // maka kita memerlukan state-nya
  const [inputOneValue, setInputOneValue] = useState("");
  const [inputTwoValue, setInputTwoValue] = useState("");

  // Asumsi ingin membuat semuanya jadi satu state saja
  const [allInput, setAllInput] = useState({
    // Asumsi: nama valuenya sama dengan "name" pada input form
    inputOne: "",
    inputTwo: "",
  });

  // Setiap kali input berubah, maka kita akan meng-update statenya juga
  const inputOneOnChangeHandler = (event) => {
    // Input yang ada di dalam form, valuenya didapat dari event.target.value
    setInputOneValue(event.target.value);
  };

  // Setiap kali input berubah, maka kita akan meng-update statenya juga
  const inputTwoOnChangeHandler = (event) => {
    // Input yang ada di dalam form, valuenya didapat dari event.target.value
    setInputTwoValue(event.target.value);
  };

  // Apabila ingin membuat all-in-one form handler
  const allInOneFormHandler = (event) => {
    // Karena state bersifat immutable,
    // maka untuk meng-set sebuah state yang bersifat object
    // Kita harus membuat object yang baru dengan SELURUH data
    // yang ada di dalam object yang lama
    setAllInput({
      ...allInput,
      // Perhatikan ini menggunakan "name" dari input yang ada
      [event.target.name]: event.target.value,
    });
  };

  // Ketika form-nya akan di-submit, maka kita akan menghandlenya secara javascript-wi
  // Sambil menggunakan prinsip Single Page Application
  // Maka halaman ini tidak boleh refresh
  // Dengan menggunakan preventDefault()
  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Value", inputOneValue, inputTwoValue);
    console.log("Value All-In-One", allInput);

    setInputOneValue("");
    setInputTwoValue("");
  };

  return (
    <section className="bg-gray-200 p-4 rounded min-w-[50vw] flex flex-col gap-2 text-left">
      <h1 className="text-xl">Form Section</h1>

      <form className="flex flex-col gap-2" onSubmit={formOnSubmitHandler}>
        <div className="flex gap-2 items-center">
          <label htmlFor="inputOne">Input One</label>

          {/* Apabila ingin menggunakan yang satuan */}
          {/* Maka: */}
          {/* - value = inputOneValue */}
          {/* - onChange = inputOneOnChangeHandler */}

          {/* Apabila ingin menggunakan yang all-in-one */}
          {/* Maka: */}
          {/* - value = allInput.inputOne */}
          {/* - onChange = allInOneFormHandler */}
          <input
            className="py-1 px-2 grow rounded"
            type="text"
            name="inputOne"
            id="inputOne"
            value={allInput.inputOne}
            onChange={allInOneFormHandler}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="inputTwo">Input Two</label>

          {/* Apabila ingin menggunakan yang satuan */}
          {/* Maka: */}
          {/* - value = inputTwoValue */}
          {/* - onChange = inputTwoOnChangeHandler */}

          {/* Apabila ingin menggunakan yang all-in-one */}
          {/* Maka: */}
          {/* - value = allInput.inputTwo */}
          {/* - onChange = allInOneFormHandler */}
          <input
            className="py-1 px-2 grow rounded"
            type="text"
            name="inputTwo"
            id="inputTwo"
            value={allInput.inputTwo}
            onChange={allInOneFormHandler}
          />
        </div>

        <button
          className="bg-sky-100 hover:bg-sky-400 hover:text-white transitions-color duration-300 py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormSection;
