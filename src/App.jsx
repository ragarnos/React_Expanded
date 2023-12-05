import "./assets/styles/App.scss";
import Counter from "./components/Counter";
import { CounterProvider } from "./components/js/CounterContext";
function App() {

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
