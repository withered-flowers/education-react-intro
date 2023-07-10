import CounterSection from "./components/CounterSection";
import FormSection from "./components/FormSection";
import TableSection from "./components/TableSection";

function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-50 p-4">
        {/* <!-- Counter Section --> */}
        <CounterSection />

        {/* <!-- Form Section --> */}
        <FormSection />

        {/* <!-- Table Section --> */}
        <TableSection />
      </main>
    </>
  );
}

export default App;
