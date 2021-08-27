import React from "react";
import "./App.css";
import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allProducts(first: $limit) {
    title
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Bad Happened</p>;
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
