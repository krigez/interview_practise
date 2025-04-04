import Searchbar from "./Searchbar";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Have A Good Day</h1>
      <h2>Start typing to see some filter magic happen!</h2>

      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <Searchbar />
      </ErrorBoundary>
    </div>
  );
}
