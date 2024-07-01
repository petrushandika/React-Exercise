import "./App.css";
import "./index.css";
import { Header, Footer } from "./components";
import AllRoutes from "./routes/AllRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <ErrorBoundary>
          <AllRoutes />
        </ErrorBoundary>
        <Footer />
      </main>
    </div>
  );
}

export default App;
