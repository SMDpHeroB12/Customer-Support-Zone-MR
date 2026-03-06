import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="lg:w-11/12 mx-auto  flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center">
          Customer Support - Tickets Zone
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
