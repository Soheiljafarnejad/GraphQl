import "./App.css";
import UseLazyQuery from "./graphql/UseLazyQuery";
import UseMutation from "./graphql/UseMutation";
import UseQuery from "./graphql/UseQuery";

function App() {
  return (
    <div className="App">
      <UseQuery />
      <UseLazyQuery />
      <UseMutation />
    </div>
  );
}

export default App;
