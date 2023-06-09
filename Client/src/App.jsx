import React from "react";
import PSDChart from "./components/PSDChart";
import { useState } from "react";
import FileUpload from "./components/FileUpload";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";
import * as d3 from "d3";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container w-full h-screen max-w-6xl">
        <p className="w-full mx-auto font-extrabold text-5xl text-red-700 bg-slate-400">
          Hello Soil
        </p>
        <PSDChart
          data={[
            [4.75, 100],
            [1.18, 85],
            [0.3, 15],
            [0.15, 4],
            [0.02, 1],
          ]}
        />
      </div>
      <FileUpload />
    </ApolloProvider>
  );
}

export default App;
