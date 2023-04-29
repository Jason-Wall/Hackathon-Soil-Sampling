import { useState } from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      Hello World
      <FileUpload />
    </ApolloProvider>
  );
}

export default App;
