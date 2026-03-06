import { Suspense } from "react";

import Footer from "./components/Footer";
import IssuesManagement from "./components/IssuesManagement";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const fetchIssues = async () => {
  const result = await fetch("/tickets.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar />
      <main className="body-color">
        <Suspense fallback={<LoadingSpinner />}>
          <IssuesManagement fetchPromise={fetchPromise} />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
